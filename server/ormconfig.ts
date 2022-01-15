import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const dotEnv = require('dotenv');
dotEnv.config();

const { DATABASE_HOST, DATABASE_PASSWORD, DATABASE_USER } = process.env;

const config: MysqlConnectionOptions = {
  type: 'mysql',
  database: 'subsmanager',
  port: 13306,
  synchronize: false,
  entities: ['dist/src/**/*.entity.js'],
  migrations: ['dist/src/db/migrations/*.js'],
  cli: { migrationsDir: 'src/db/migrations' },
  host: DATABASE_HOST,
  password: DATABASE_PASSWORD,
  username: DATABASE_USER,
};

export default config;
