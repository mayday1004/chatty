import dotenv from 'dotenv';

dotenv.config({ path: './src/.env' });

class Config {
  public NODE_ENV: string | undefined;
  public DATABASE_URL: string | undefined;
  public JWT_TOKEN: string | undefined;
  public COOKIE_SECRET_KEY_1: string | undefined;
  public COOKIE_SECRET_KEY_2: string | undefined;
  public CLIENT_URL: string | undefined;

  constructor() {
    this.NODE_ENV = process.env.NODE_ENV || '';
    this.DATABASE_URL = process.env.DATABASE_URL;
    this.JWT_TOKEN = process.env.JWT_TOKEN;
    this.COOKIE_SECRET_KEY_1 = process.env.COOKIE_SECRET_KEY_1;
    this.COOKIE_SECRET_KEY_2 = process.env.COOKIE_SECRET_KEY_2;
    this.CLIENT_URL = process.env.CLIENT_URL;
  }

  //驗證環境變數是不是有undefined的，如果驗證過關才開始啟動我們的app
  public validateConfig(): void {
    for (const [key, value] of Object.entries(this)) {
      if (value === undefined) {
        throw new Error(`Configuration ${key} is undefined.`);
      }
    }
  }
}

export const config: Config = new Config();
