const express = require("express");
const specializationRouter = express.Router();

const specializationController = require("../controllers/specialization.js");

specializationRouter.post(
  "/",
  specializationController.createNewSpecialization
);
specializationRouter.get("/", specializationController.getAllSpecialization);
specializationRouter.get(
  "/:Id",
  specializationController.getAllClinicSpecializationByID
);
module.exports = specializationRouter;
