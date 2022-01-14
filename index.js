// import express from "express";
const express = require("express");
const index = express();
index.use(express.urlencoded({ extended: true }));
require("dotenv").config();
index.use(express.json());
const deleteImage = require("./routes/delete-image");
const cloudinary = require('./utils/cloudinary');

// index.use("/delete-image", deleteImage);

const PORT = 8080;


// Routes
index.get("/", (req, res) => {
  res.send("Testing the response");
});

index.get('/deleteImage', async(req, res) => {
    try {
        const test = await cloudinary.uploader.destroy("wifispace-images-upload/kefhwbpij4akogos1s7l");
        console.log("done")
        res.json({
            status:'true',
            message:'image has been deleted (hopefully)'
        })
    } catch (error) {
        console.log("error occured", error)
    }
})

//   index Listening to Port Requests
index.listen(PORT, () => {
  console.log(`index is running on Port: ${PORT}`);
});