import morgan, { StreamOptions } from 'morgan';
import dayjs from 'dayjs';
import fs from 'fs';
import { env } from '../configs/env';

const stream: StreamOptions = {
  write: (message) => {
    if (env.logger) {
      const date = dayjs().format('YYYY-MM-D');
      const fileName = `logs/${date}.csv`;
      fs.appendFile(`${fileName}`, message, (err) => {
        if (err) console.log('Error writing log on file');
      });
      console.log(message);
    }
  },
};

const logger = morgan(
  (tokens, req, res) => {
    const ip = tokens['remote-addr'](req, res);
    const method = tokens.method(req, res);
    const url = tokens.url(req, res);
    const status = tokens.status(req, res);
    const responseTime = tokens['response-time'](req, res) + 'ms';
    const operationId = tokens.operationId(req, res);
    return `${ip};${method};${url};${status};${responseTime};${operationId};`;
  },
  { stream }
);

morgan.token('operationId', (req, res) => {
  return res.getHeader('operationId')?.toString() || undefined;
});

export { logger };
