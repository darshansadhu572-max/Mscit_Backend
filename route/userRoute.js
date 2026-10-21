import express from "express";
import {adduser,getUser,getSingleUser,DeleteUser,UpdateUser, loginUser} from "../controller/userDatacontroller.js"
import authenticateToken from "../utils/authMiddleware.js"; 
import upload from "../utils/uploadMiddleware.js";

const router = express.Router()
router.post('/api/add-user', authenticateToken, upload.single('image'), adduser)
router.get('/api/get-user',authenticateToken, upload.single('image'), getUser)
router.get('/api/get-single-user/:id',authenticateToken, getSingleUser)
router.delete('/api/delete-user/:id',authenticateToken, DeleteUser)
router.put('/api/update-User/:id',authenticateToken,upload.single('image'), UpdateUser)
router.post('/api/login', loginUser)


export default router
