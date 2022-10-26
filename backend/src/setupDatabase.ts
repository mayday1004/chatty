import mongoose from 'mongoose';
import { config } from '@root/config';

export default () => {
  const connect = () => {
    mongoose
      .connect(`${config.DATABASE_URL}`)
      .then(() => console.log('DB connection successful! 😎'))
      .catch(() => console.log('DB connection failed! 😭'));
  };
  connect();

  //如果DB斷開連接請再次連接，否則繼續在控制台中顯示錯誤
  mongoose.connection.on('disconnected', connect);
};
