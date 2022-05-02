const flag = true;

if(!flag){
    console.log("Condition satisfied");
}else{
    console.log(flag);
    console.log("Condition NOT satisfied");
}

let i = 0;
while(i>10){
    console.log(`Looping-> ${i}`);
    i++;
}

let k;
do {
    i++;
} while (i>10);
console.log(`After DOWHILE-> ${i}`);