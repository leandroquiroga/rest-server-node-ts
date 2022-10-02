import { NextFunction, Request, Response } from "express";
import Usuario from "../models/usuario";



export const getUsers = async(req: Request, res: Response, next: NextFunction) => {
  
  const users = await Usuario.findAll();

  if(!users) return res.status(204);
  
  res.status(200).json({
    message: 'GET - Users',
    users
  });
};


export const getUser = async(req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  const user =  await Usuario.findByPk(id);

  if(!user) 
    return res.status(400).json({
      mesagge: 'User not found'
    });

  res.status(200).json({
    menssage: 'GET - User',
    user
  });
};

export const postUser = (req: Request, res: Response, next: NextFunction) => {
  const body = req.body;

  try {
    
    // Comprueba si el email existe en la bases de datos
    const existEmail = Usuario.findOne({
      where: {
        email: body.email
      }
    });
    
    // Si el email no existe
    if(! existEmail ) {
      const user = new Usuario(body);
      user.save();
      
      // Verifica que el body no venga vacio
      if(!body) return res.status(400).json({message: 'ERROR - body is required'});
  
      return res.status(200).json({
        message: 'POST - User',
        user,
      });
    };

    res.status(404).json({
      message: 'Try again with other email please'
    })

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'ERROR! Please try again latter'
    })
  }
  
};

export const putUser = async(req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const { body } = req;
  
  try {
    
    // Buscamos si el id existe
    const user = await Usuario.findByPk(id);
    
      // Verificamos si el ID existe
      if(user){
        // Buscamos el email 
        const existEmail = await Usuario.findOne({
          where: {
            email: body.email
          },
        });

        // Verificamos que el el email no exista
        if(!existEmail){
          await user.update(body);

          return res.status(200).json({
            message: 'User updated success',
            user
          });
        };

        return res.status(404).json({
          message: 'Try again with other email please',
        })
      };

      res.status(404).json({
        message: 'Sorry! User not exists'
      })
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'ERROR! Please try again latter'
      }); 
  };
};

export const deleteUser = async(req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  try {
    const user = await Usuario.findByPk(id);
    
    if(user){
      
      // Eliminacion logica
      await user.update({estado: 0},);

      return res.status(200).json({
        message: `User has been deleted correctly`,
      });
    };

    res.status(404).json({
      message: 'Sorry! User not exists'
    });
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'ERRO! Plaese try again latter'
    });
    
  }
  res.status(200).json({
    menssage: 'DELETE - User',
    id
  });
};