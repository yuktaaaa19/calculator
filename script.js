let resulti=document.getElementById("inputtext");
let calculate=(number)=>{
  resulti.value+=number;
}
let result=()=>{
  try{
    resulti.value=eval(resulti.value);
  }
  catch(err){
    alert("Enter valid numbers!!");
  }
  
}
function clr(){
  resulti.value=" ";
}
function del(){
  resulti.value=resulti.value.slice(0,-1);
}
function absval(){
  resulti.value=-Math.abs(resulti.value);
}