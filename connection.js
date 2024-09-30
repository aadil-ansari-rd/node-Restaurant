const mongoose = require('mongoose');

async function connection(){
    try{
        await mongoose.connect('mongodb://localhost:27017/Zaiqa');
        console.log('Database connected')
    }catch(err){
        console.log(err);
    }
}

module.exports=connection;