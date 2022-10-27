import dotenv from 'dotenv';
import bunyan from 'bunyan';
import cloudinary from 'cloudinary';

dotenv.config({ path: './src/.env' });

class Config {
  public NODE_ENV: string | undefined;
  public DATABASE_URL: string | undefined;
  public JWT_TOKEN: string | undefined;
  public COOKIE_SECRET_KEY_1: string | undefined;
  public COOKIE_SECRET_KEY_2: string | undefined;
  public CLIENT_URL: string | undefined;
  public REDIS_HOST: string | undefined;
  public CLOUD_API_NAME: string | undefined;
  public CLOUD_API_KEY: string | undefined;
  public CLOUD_API_SECRET: string | undefined;

  constructor() {
    this.NODE_ENV = process.env.NODE_ENV;
    this.DATABASE_URL = process.env.DATABASE_URL;
    this.JWT_TOKEN = process.env.JWT_TOKEN;
    this.COOKIE_SECRET_KEY_1 = process.env.COOKIE_SECRET_KEY_1;
    this.COOKIE_SECRET_KEY_2 = process.env.COOKIE_SECRET_KEY_2;
    this.CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:3000';
    this.REDIS_HOST = process.env.REDIS_HOST || 'redis://localhost:6379';
    this.CLOUD_API_NAME = process.env.CLOUD_API_NAME;
    this.CLOUD_API_KEY = process.env.CLOUD_API_KEY;
    this.CLOUD_API_SECRET = process.env.CLOUD_API_SECRET;
  }

  public createLogger(name: string): bunyan {
    return bunyan.createLogger({ name, level: 'debug' });
  }

  //驗證環境變數是不是有undefined的，如果驗證過關才開始啟動我們的app
  public validateConfig(): void {
    for (const [key, value] of Object.entries(this)) {
      if (value === undefined) {
        throw new Error(`Configuration ${key} is undefined.`);
      }
    }
  }

  public cloudinaryConfig(): void {
    cloudinary.v2.config({
      cloud_name: this.CLOUD_API_NAME,
      api_key: this.CLOUD_API_KEY,
      api_secret: this.CLOUD_API_SECRET
    });
  }
}

export const config: Config = new Config();
