import { Router } from 'express';
import { 
  deleteUser,
  getUser,
  getUsers,
  postUser,
  putUser 
} from '../controllers/users';


const router = Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/new', postUser);
router.put('/change/:id', putUser);
router.delete('/:id', deleteUser);


export default router;