import { Request, Response } from "express";

export class AuthController{
    static async sendMessage (req: Request, res: Response){
        const senderId = (req as any).userId;
        const { receiverId } = req.body;
        const { text } = req.body;

        try{
            const messages = 
        }
    }
}