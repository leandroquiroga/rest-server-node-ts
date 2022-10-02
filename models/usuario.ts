import { DataTypes } from 'sequelize';
import db from '../database/connection';

const Usuario = db.define('usuarios', {
  nombre: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  estado: {
    type: DataTypes.TINYINT
  },
});

export default Usuario;