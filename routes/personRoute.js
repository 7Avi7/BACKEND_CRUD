const personController = require("../controllers/personController");
const express = require("express");
const router = express.Router();

router.get("/", personController.getAllPersons);

router.get("/:id", personController.getPersonById);

router.get("/firstName/:firstName", personController.getpersonByFirstName);

router.get("/address/:email", personController.getAddressByEmail);

router.post("/", personController.createPerson);

router.put("/:id", personController.updatePerson);

router.delete("/:id", personController.deletePerson);

module.exports = router;
