const sumInt = (a,b) => {
    return Math.round(a+b);
}
const substractionInt = (a,b) =>{
    return Math.round(a-b);
}
const divisionInt = (a,b) =>{
    return Math.round(a/b);
}
const multiplicationInt = (a,b) => {
    return Math.round(a*b);
}
const power = (a,p) =>{
    if(p<0){
        return 1;
    }
    if(p === 0){
        return 1;
    }
    
    return a*power(a,p-1);
    
}
const root = (a,pow) =>{

    return a** pow( ** -1)
    
    consle.log(root(25,2));
    
}
const absolute = (a) => {
    if(a<0){
        return -a;
    }
    else {
        return a;
    }
}
const mod = (a,b) =>{
    return a%b;
}
const integral =(func, a,b) =>{
    
}
const log = (a,base) => {
    for(let i=1; ; i++){
        if(power(base,i)=a){
            return i;
        }
    }
}
const flipSign = (a) =>{
    return -a;
}
const sin = (a) =>{
    
}
const cos = (a) =>{}
const percent = (a,b) => {
    return a*b/100;
}