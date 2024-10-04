import { argv } from 'process';

const parseArgs = () => {
  let result = '';
  for (let i = 0; i < argv.length; i ++) {
    if (argv[i].match('^(--)')) {
      result += `${argv[i].slice(2)} is ${argv[i+1]}, `;
      i += 1;
    }
  }
  console.log(result.slice(0,-2));
};

parseArgs();