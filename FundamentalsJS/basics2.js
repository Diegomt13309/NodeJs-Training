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

for(let k=0; k<=10; k++){
    console.log(`Im in the for loop-> ${k}`);
}
let requiere = true;
while(requiere){
    console.log(requiere);
    requiere=false;
}

//2 and 5
//from 1 to ten give me common multiple values of 2 and 5
let n = 0;
for(let k=1; k<=100; k++){
    if(k%2 == 0 && k%5 == 0){
        n++;
        console.log(`Number-> ${k}`);
    }
    if(n==3){
        break;
    }
}