var num = 5;

var flag = true;

for(var i=2; i<num; i++){
    if(num%i===0){
        flag = false;
    } 
};

if(flag){
    console.log("It is a Prime number");
}else{
    console.log("It is not a Prime number");
}