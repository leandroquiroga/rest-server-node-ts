import { Sequelize } from 'sequelize';
import { envairoment } from '../configuration/envairoment';

const db = new Sequelize(`${envairoment.DB}`, `${envairoment.DB_NAME}`, `${envairoment.DB_PASSWORD}`, {
  host: 'localhost',
  dialect: 'mysql',
  // logging: true
});


export default db;