const controls = require("../controllers/controller.js");
var router = require("express").Router();
  

// simple route
router.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// Retrieve all movements
router.get("/movements", controls.getAllMovements);

// Retrieve oncology room 1 movements
router.get("/movements/oncoR1", controls.getOncoR1);

// Retrieve oncology room 1 movements
router.get("/movements/oncoR1/enter", controls.getOncoR1Enter);

// Retrieve oncology room 1 movements
router.get("/movements/oncoR1/specificity", controls.getOncoR1Spec);

// Retrieve oncology room 1 movements
router.get("/movements/oncoR1/time", controls.getOncoR1Time);

// Retrieve neurology room 1 movements
router.get("/movements/neuroR1", controls.getNeuroR1);

// Retrieve neurology room 1 movements
router.get("/movements/neuroR1/enter", controls.getNeuroR1Enter);

// Retrieve oncology room 1 movements
router.get("/movements/neuroR1/time", controls.getNeuroR1Time);

// Retrieve gastrology room 1 movements
router.get("/movements/gastroR1", controls.getGastroR1);

// Retrieve gastrology room 1 movements
router.get("/movements/gastroR1/enter", controls.getGastroR1Enter);

// Retrieve oncology room 1 movements
router.get("/movements/gastroR1/time", controls.getGastroR1Time);

// Retrieve radiology room 1 movements
router.get("/movements/radioR1", controls.getRadioR1Moves);

// Retrieve radiology room 1 movements
router.get("/movements/radioR1/enter", controls.getRadioR1Enter);

// Retrieve oncology room 1 movements
router.get("/movements/radioR1/time", controls.getRadioR1Time);

// Retrieve radiology room 2 movements
router.get("/movements/radioR2", controls.getRadioR2Moves);

// Retrieve radiology room 2 movements
router.get("/movements/radioR2/enter", controls.getRadioR2Enter);

// Retrieve oncology room 1 movements
router.get("/movements/radioR2/time", controls.getRadioR2Time);


module.exports = router;
  