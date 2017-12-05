const  sqrt = Math.sqrt;

function square(x){
    return x*x;
}

export function diag(x,y){
    return sqrt(square(x)+square(y));
}