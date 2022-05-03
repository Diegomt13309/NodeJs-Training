var marks = Array(6);
var marks = new Array(20,40,35,12,37,100);
var marks = [20,40,35,12,37,100];

console.log(marks[2]);
marks[3] = 14;
console.log(marks);
console.log(marks.length);

marks.push(65);
console.log(marks);
marks.pop();
console.log(marks);
marks.unshift(12);
console.log(marks);
console.log(marks.indexOf(100));
//120 is present
console.log(marks.includes(120));
subMarks = marks.slice(2,5);
console.log(subMarks);
let sum = 0;
for(let i = 0; i<marks.length; i++){
    sum += marks[i];
}
console.log(sum);
//reduce filter map
let total = marks.reduce((sum,mark)=>sum+mark,0);
console.log(`Total using the anonymous functions: ${total}`);

var scores = [12,13,14,16];
//even numbers
var evenScores = [];
for(let i = 0; i<scores.length; i++){
    if(scores[i]%2 == 0){
        evenScores.push(scores[i]);
    }
}
console.log(evenScores);
//even numbers reduce
let newScores = scores.filter(score=>score%2==0);
console.log(newScores);
//map will modify each value of the array
let mappedArray = newScores.map(score=>score*3);
console.log(mappedArray);
//combined way
let tots = scores.filter(s=>s%2==0).map(s=>s*3);
console.log(tots);

let total1 = mappedArray.reduce((sum,val)=>sum+val,0);
console.log(total1);

var scores1 = [12,13,14,16];
let combined = scores1.filter(s=>s%2==0).map(s=>s*3).reduce((s,m)=>s+m,0);
console.log(combined);


//Sorting
let fruits = ["Banana","Mango","Pomegrante","Apple"];
fruits.sort();
fruits.reverse();
console.log(fruits);

var scores2 = [12,50,13,19,14,16,09];
console.log(scores2.sort((a,b)=>a-b));


