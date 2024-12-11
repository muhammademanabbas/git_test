const express = require("express");
const router = express.Router();
const person = require("../model/Person");

// get the data from front end and the server will save thi into database
router.post("/", async (req, res) => {
  try {
    const response = await person(req.body);
    response.save();

    console.log("Person Data is Saved in Database!");
    res.status(200).json(response);
  } catch (error) {
    console.log("Error while Saving Person data in Database!");
    res
      .status(500)
      .json({
        message: "Error while Saving Person data in Database!",
        response,
      });
  }
});

router.get("/", async (req, res) => {
  try {
    const allPersonsData = await person.find();
    res.status(200).json(allPersonsData);
  } catch (error) {
    console.log("Error while Saving Person data in Database!");
    res
      .status(500)
      .json({
        message: "Error while Fetching Person Data from Database!",
        allPersonsData,
      });
  }
});

router.get("/:workType", async (req, res) => {
  try {
    const response = await person.find({ work: req.params.workType });
    res.status(200).json(response);
    
  } catch (error) {
    console.log("Error while Updating Person data in Database!");
    res
      .status()
      .json({
        error: "Internal Server Error!",
      });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const response = await person.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if(!response){
        res.status(404).json({message: "No Person Found!"});
    }
    res.status(200).json(response);
  } catch (error) {
    console.log("Error while updating Person data in Database!");
    res
      .status(500)
      .json({
        error: "Internal Server Error!",
      });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const response = await person.findByIdAndDelete(req.params.id);
    if(!response){
        res.status(404).json({message: "No Person Found!"});
    }
    res.status(200).json(response);
    
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({
        error: "Internal Server Error!",
      });
  }
});

module.exports = router;
