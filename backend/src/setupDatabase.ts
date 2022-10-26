import mongoose from 'mongoose';
import Logger from 'bunyan';
import { config } from '@root/config';

const log: Logger = config.createLogger('database');

export default () => {
  const connect = () => {
    mongoose
      .connect(`${config.DATABASE_URL}`)
      .then(() => log.info('DB connection successful! 😎'))
      .catch(() => log.error('DB connection failed! 😭'));
  };
  connect();

  //如果DB斷開連接請再次連接，否則繼續在控制台中顯示錯誤
  mongoose.connection.on('disconnected', connect);
};
