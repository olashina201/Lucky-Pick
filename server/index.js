const express = require('express')
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express();

const port = 5000;
app.get("/", (req, res) => res.send("hello world"));

app.listen(port, () => console.log(`server running on port${port}`));
