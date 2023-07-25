import { verifySignUp } from "../middleware/verifySignUp.js";
import { signup } from "../controllers/auth.controller.js";

const setupRoutes = (app) => {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateEmail,
    ],
    signup
  );
};

export default setupRoutes;
