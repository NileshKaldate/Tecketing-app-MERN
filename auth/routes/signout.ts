import express from "express";
const router = express.Router();

router.get("/api/users/signout", (req, res) => {
  res.send("Sign out User");
});

export { router as signOutRouter };
