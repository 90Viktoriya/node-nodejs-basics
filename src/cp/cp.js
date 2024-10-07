import { join } from 'path';
import { fork } from 'child_process';

const spawnChildProcess = async (args) => {
  const __dirname = import.meta.dirname;
  const filename = join(__dirname, "files", "script.js");
  fork(filename, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['someArgument1', 'someArgument2', 222] );
