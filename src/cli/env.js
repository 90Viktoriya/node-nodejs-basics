import { env } from 'process';

const parseEnv = () => {
  for (const [key, value] of Object.entries(env)) {
    if (key.match('^(RSS_)')) {
      console.log(`${key}: ${value}; `);
    }
  }
};

parseEnv();