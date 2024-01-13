const client = require("./client");

async function init(){
    // await client.set("msg:4", "Where are you going?")
    await client.expire("msg:4",10);
    const result = await client.get("msg:4");
    console.log("Result-->", result); 
}

init();