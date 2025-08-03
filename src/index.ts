import express from "express";
import { AuthController as SignUpController } from "./routes/signup";
import { AuthController as SignInController} from "./routes/signin";
import { AuthController as createPostController} from "./routes/posts";
import { AuthController as getPostController} from "./routes/posts";
import { authMidddleWare } from "./Authmiddleware";

const app = express();
app.use(express.json());

app.post("/api/v1/signup", SignUpController.Signup);
app.post("/api/v1/signin", SignInController.Signin);
app.post("/api/v1/posts", authMidddleWare, createPostController.newPost);
app.get("/api/v1/content", authMidddleWare, getPostController.getPost);

app.listen(3000, () => {
    console.log("Port is running at 3000");
})
