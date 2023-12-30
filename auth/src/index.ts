import { json } from "body-parser";
import express from "express";
import "express-async-errors";
import { currentUserRouter } from "../routes/current-user";
import { singInRouter } from "../routes/signin";
import { signOutRouter } from "../routes/signout";
import { signUpRouter } from "../routes/signup";
import { errorHandler } from "../middlewares/error-handler";
import { NotFoundError } from "../errors/not-found-error";
import { DatabaseConnectionError } from "../errors/database-connection-error";
import connectDB from "../db/DBConnect";

const app = express();
app.use(json());

app.use(currentUserRouter);
app.use(singInRouter);
app.use(signOutRouter);
app.use(signUpRouter);

app.all("*", async (req, res, next) => {
  throw new NotFoundError();
});
app.use(errorHandler);

connectDB()
  .then(() => {
    app.listen(3000, () => {
      console.log(`Server is listening on port 3000`);
    });
  })
  .catch(() => {
    throw new DatabaseConnectionError();
  });
