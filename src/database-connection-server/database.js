const express = require('express');
const app = express();

require('dotenv').config();

app.get('/database/connection' , (req,res) => {
    res.status(200).json({
        status:true,
        message:'Database connected successfully!'
    });
})

const port = process.env.DB_SERVER_PORT || 4000
const server = app.listen(port , () => {
    console.log(`Database server is running on port ${port}`);
});