const express= require('express')
const config=require('config')
const mongoose=require('mongoose')
const app=express()
app.use('/api/auth',require('./routes/auth.routes'))
const PORT=config.get('port')||5000


async function start(){
    try{
    await mongoose.connect(config.get('mongoUri'),{})
    app.listen(PORT,() =>console.log('PORT:'+PORT))
    }
    catch(e){
        console.log('Server error',e.message)
        process.exit(1)
    }
}

start()
