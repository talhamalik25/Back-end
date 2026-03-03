const express = require('express')
const multer = require('multer')
const uploadFile = require('./services/storage.service')

const app = express();
app.use(express.json());

const upload = multer({storage: multer.memoryStorage() })

app.post("/create-post", upload.single("Image"), async (req, res) => {
    console.log(req.body);

    const result = await uploadFile(req.file.buffer);

    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    })

    return res.status(201).json({
        post
    })
    

})

module.exports = app;