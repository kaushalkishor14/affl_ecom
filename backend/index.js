const express = require('express');
const cors = require('cors');
const path = require('path');

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/demodb');
  console.log("db connected");
}

const UserSchema = new mongoose.Schema({
    name: String
});

const User = mongoose.model('UserData', UserSchema);

const server = express();
server.use(cors());

// Routes Start from here 
require(path.join(__dirname,'/routes/user.routes'))(server);


server.use(body)

server.listen(8000, ()=>{
    console.log("server started");
})