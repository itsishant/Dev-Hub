import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config";

export const generateToken = async (username: string) => {
    return await jwt.sign({username}, JWT_SECRET, {expiresIn: "6h"})
}
