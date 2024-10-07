import { Worker } from 'worker_threads';
import { join } from 'path';
import { cpus } from 'os';

const performCalculations = async () => {
  const __dirname = import.meta.dirname;
  const filename = join(__dirname, "worker.js");
  const cpuCount = cpus().length;
  const result = Array(cpuCount).fill(null);
  const workers = result.map((_, index) => 
    new Promise((resolve) => {
      const worker = new Worker(filename, { workerData: index + 10 });
      worker.on('message', (message) => {
        result[index] = {
          status: 'resolved',
          data: message
        }
      });
      worker.on('error', () => {
        result[index] = {
          status: 'error',
          data: null
        }
      })
      worker.on('exit', () => resolve());
    })
  );
  await Promise.all(workers);
  console.log(result);
};

await performCalculations();