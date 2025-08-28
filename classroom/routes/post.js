const express = require("express");
const router = express.Router();

// Index - posts
router.get("/", (req, res)=>{
    res.send("GET for potss");
})

// Show - posts
router.get("/:id", (req, res)=>{
    res.send("GET for post id");
})

// Post - posts
router.post("/", (req, res)=>{
    res.send("POST for posts");
})

// Delete - posts
router.delete("/:id", (req, res)=>{
    res.send("Delete for post id");
})

module.exports = router;