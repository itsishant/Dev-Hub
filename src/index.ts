import express from "express";
import { AuthController as SignUpController } from "./routes/signup";
import { AuthController as SignInController} from "./routes/signin";

const app = express();
app.use(express.json());

app.post("/api/v1/signup", SignUpController.Signup);
app.post("/api/v1/signin", SignInController.Signin);

app.listen(3000, () => {
    console.log("Port is running at 3000");
})
