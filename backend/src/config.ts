import dotenv from 'dotenv';

dotenv.config({ path: './src/.env' });

class Config {
  public NODE_ENV: string | undefined;
  public DATABASE_URL: string | undefined;

  constructor() {
    this.NODE_ENV = process.env.NODE_ENV || '';
    this.DATABASE_URL = process.env.DATABASE_URL;
  }
}

export const config: Config = new Config();
