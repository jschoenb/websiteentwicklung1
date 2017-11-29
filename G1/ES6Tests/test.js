function testScope(bool){
    let y="Test";
    console.log(y);
    if(bool){
        const MAX = 10;
        let y= "Sth new";
        console.log(y);
        console.log(MAX);
    }
    //console.log(MAX);
    console.log(y);
}

testScope(true);

const MAX = 10; //Konstanten haben auch Blockscope
console.log(MAX);

//MAX=13;

const P = {
    firstName : "Hannes",
    lastName : "Schönböck"
}

console.log(P);

P.firstName = "Johannes";

console.log(P);


var foo =()=>{
    console.log("Called foo");
}

foo();

let btn = document.getElementById("b1");
btn.addEventListener("click",(ev)=>{
   console.log("Clicked Button");
   console.log(this);
   console.log(ev.currentTarget);
});

let arr = [1,2,3,4];

for(let i=0; i<arr.length;i++){
    console.log(arr[i]);
}

for(let val of arr){
    console.log(val);
}