function testScope(bool){
    var y = "Test";
    console.log(y);
    if(bool){
        let y = "Hannes";
        console.log(y);
    }
    console.log(y);
}

testScope(true);

const MAX = 10;
console.log(MAX);
//MAX= 23;

const p = {
    firstName:"Hannes",
    lastName:"Schönböck"
}

console.log(p);

p.firstName = "Johannes";

console.log(p);

//p = {}



var foo = ()=>{
    console.log("called foo");
}

foo();

let btn = document.getElementById("b1");
btn.addEventListener("click", (e) => {
    console.log(this);
    console.log(e.currentTarget);
});

console.log(this);

let arr =[1,2,3,4,5];

for(var i=0; i< arr.length;i++){
    console.log(arr[i]);
}

for(let val of arr){
    console.log(val);
}
