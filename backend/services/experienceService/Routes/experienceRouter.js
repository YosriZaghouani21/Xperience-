const router = require("express").Router();
const experienceController = require("../controllers/experience.controller");

router.route("/experience").get(experienceController.getExperiences);

router
  .route("/experience/:id")
  .delete(experienceController.deleteExperience)
  .put(experienceController.updateExperience)
  .get(experienceController.getSingleExperience);

router.route("/experience").post(experienceController.createExperience);

module.exports = router;
