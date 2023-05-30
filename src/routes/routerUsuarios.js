const { Router } = require("express");
const usersController = require("../controller/usersController");
const passportAutenticate = require("../middlewares/passportAutenticate");

const routerUsuarios = Router();

routerUsuarios.get(
  "/",
  passportAutenticate("current"),
  usersController.getUsers
);

routerUsuarios.put(
  "/:uid/:cid",
  passportAutenticate("current"),
  usersController.updateUserCart
);

routerUsuarios.put(
  "/:uid/:tid",
  passportAutenticate("current"),
  usersController.updateUserCart
);

module.exports = routerUsuarios;
