const express = require('express');

const router = express.Router();

router.post('/create', async (req, res) => {

    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ 
            message: 'Unauthorized' 
        });
    }

   try{
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      const user = await userModel.findOne({ 
        _id: decoded.id 
    });
 console.log(user);
   }
   catch(err){
    return res.status(401).json({ 
        message: 'Token is invalid' 
    });
   }

    console.log(req.cookies);

    res.send('Post created successfully');
});


    module.exports = router;