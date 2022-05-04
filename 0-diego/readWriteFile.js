const fs = require('fs');

/*Blocking synchronous way
const textIn = fs.readFileSync('./1-node-farm/starter/txt/input.txt', 'utf-8');
console.log(textIn);
const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`
fs.writeFileSync('./1-node-farm/starter/txt/outputD.txt', textOut);
console.log('File has been Writting');
*/

//Non-Blocking asynchronous way
//err many times will be first, secon, the data
fs.readFile('./1-node-farm/starter/txt/start.txt','utf-8', (err,data1)=>{
    if(err) return console.log('Error! 💥');
    fs.readFile(`./1-node-farm/starter/txt/${data1}.txt`,'utf-8', (err,data2)=>{
        console.log(data2);
        fs.readFile('./1-node-farm/starter/txt/append.txt','utf-8', (err,data3)=>{
            console.log(data3);
            fs.writeFile('./1-node-farm/starter/txt/final.txt', `${data2}\n${data3}`,'utf-8', err =>{
                console.log("File has been Written.!! :)");
            });
        });
    });
});
console.log('Will read file.!');