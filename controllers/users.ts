import { NextFunction, Request, Response } from "express";



export const getUsers = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    menssage: 'GET - Users',
  });
};


export const getUser = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  res.status(200).json({
    menssage: 'GET - User',
    id,
  });
};

export const postUser = (req: Request, res: Response, next: NextFunction) => {
  const data = req.body;

  console.log(data);
  
  if(!data) return res.status(400).json({message: 'ERROR - Data is required'});

  res.status(200).json({
    menssage: 'POST - User',
    data,
  });
};

export const putUser = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const { body } = req;

  res.status(200).json({
    menssage: 'PUT - User',
    id,
    body
  });
};

export const deleteUser = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  res.status(200).json({
    menssage: 'DELETE - User',
    id
  });
};