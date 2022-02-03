const express = require('express');
const axios = require('axios');
const app = express();

require('dotenv').config();

app.get('/' , async(req,res) => {
    const result = await axios.get(`http://localhost:${process.env.DB_SERVER_PORT}/database/connection`);
    res.status(200).json({
        status:true,
        data:result.data
    })
})

const port = process.env.PORT || 3000;

const server = app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
});


