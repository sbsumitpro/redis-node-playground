const client = require("./client");

async function init(){
    // await client.lpush("messages",4)
    // await client.lpush("messages",44)
    // await client.lpush("messages",444)
    // const res = await client.blpop("messages",30);
    const res = await client.lrange("messages",0,-1)
    console.log("res==>",res)

}

init();