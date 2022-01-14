const express = require("express")
let router = express.Router();
const cloudinary = require("../utils/cloudinary");

router.post("/", async (req, res) => {
    try {
        const test = await cloudinary.uploader.destroy("wifispace-images-upload/uihslut07xibixoc22sc");
        console.log("done")
    } catch (error) {
        console.log("error occured", error)
    }
})