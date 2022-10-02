import { Sequelize } from 'sequelize';

const db = new Sequelize('rest-server-tc', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
  // logging: true
});


export default db;