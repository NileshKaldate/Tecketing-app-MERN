import { json } from "body-parser";
import express from "express";
import { currentUserRouter } from "../routes/current-user";
import { singInRouter } from "../routes/signin";
import { signOutRouter } from "../routes/signout";
import { signUpRouter } from "../routes/signup";

const app = express();
app.use(json());

app.use(currentUserRouter);
app.use(singInRouter);
app.use(signOutRouter);
app.use(signUpRouter);

app.listen(3000, () => {
  console.log(`Server is listening on port 3000`);
});
