const fs = require("fs/promises")

const createFile = async ()=>{
    try{
await fs.writeFile("message.txt","This is a message.");
console.log("File create successfully")
    }catch(err){
console.log("Error creating file:", err)
    }
}
createFile();

const displayMessage = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("Hello, World!");
            resolve();
        },1000)
    })
}

displayMessage()
.then(() => {
    console.log("Promise resolved!");
})
.catch((error)=> {
    console.error("Promise rejected:", error)
})