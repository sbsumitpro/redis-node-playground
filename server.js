const { default: axios } = require("axios");
const express = require("express");
const client = require("./client");

const app = express();

app.get("/", async(req,res)=>{
    try{
        const cacheValue = await client.get("todos:jsonplaceholder");
    
        if(cacheValue){
            return res.json(JSON.parse(cacheValue))
        }
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/todos/");
    
        await client.set("todos:jsonplaceholder",JSON.stringify(data));
        await client.expire("todos:jsonplaceholder",30);
    
        return res.json(data);
    }catch(err){
        console.log(err);
        return res.status(400).send("Something went wrong");
    }
})

app.listen(9000, ()=>{
    console.log("Server is up and listening to port:: 9000")
})