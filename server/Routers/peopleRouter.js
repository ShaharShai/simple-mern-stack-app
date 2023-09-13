const express = require("express");
const peopleBLL = require("../BLL/peopleBLL");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allPeople = await peopleBLL.getAllPeople();
    res.send(allPeople);
  } catch (error) {
    res.send(error);
  }
});

router.get("/:id", async (req, res) => {
    try {
        const personDB = await peopleBLL.getPersonById(req.params.id);
        res.send(personDB);
    } catch (error) {
        res.send(error);
    }
})

router.post("/", async (req, res) => {
    try {
        const personToAdd = req.body
        const result = await peopleBLL.addPerson(personToAdd)
        res.send(result);
    } catch (error) {
        res.send(error); 
    }
})

router.put("/:id", async(req, res) => {
    try {
        const id = req.params.id
        const updatedPerson = req.body
        const result = await peopleBLL.updatePerson(id, updatedPerson)
        res.send(result)
    } catch (error) {
        res.send(error);
    }
})

router.delete("/:id", async(req, res) => {
    try {
        const result = await peopleBLL.removePerson(req.params.id)
        res.send(result)
    } catch (error) {
        res.send(error);
    }
})

module.exports = router;
