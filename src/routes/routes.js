import { Router } from "express";
import routerUser from "../components/user/user.routes.js";
import authRouter from "../services/auth/auth.routes.js";
import routerRole from "../components/role/role.routes.js";


const router = Router(); 
router.use('/usuario', routerUser); 
router.use('/auth', authRouter);
router.use('/roles', routerRole);


export default router;


