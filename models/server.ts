import express, { Application } from 'express';
import cors from 'cors';

import router from '../routes/user';
import { envairoment } from '../configuration/envairoment';

class Server {

  // Declarar instancias
  private app  : Application;
  private port : string;
  private host : string;
  private api = {
    users: '/api/users'
  };

  constructor(){
    this.app  = express();
    this.port = envairoment.PORT;
    this.host = envairoment.HOST;
    
    this.middleware();
  };

  middleware(){
    
    // CORS
    this.app.use(cors());
    
    // PARSE BODY
    this.app.use(express.json());
    
    // STATIC
    this.app.use(express.static('public'))
    
    this.routes();
  };

  routes(){
    this.app.use(this.api.users, router)
  };


  listen(){
    this.app.listen( this.port, () => {
      (this.port) 
        ? console.log(`Server running on => http://${this.host}:${this.port}`)
        : console.log(`Server crashed`);
    });
  };
};


export default Server;