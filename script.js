function plus() {
    var a,b,result;
    a=document.getElementById("inp1").value;
    a = parseInt(a);
    b=document.getElementById("inp2").value;
    b = parseInt(b);
    result = a+b;
    document.getElementById("out").innerHTML=result;
}

function minus() {
    var a,b,result;
    a=document.getElementById("inp1").value;
    a = parseInt(a);
    b=document.getElementById("inp2").value;
    b = parseInt(b);
    result = a-b;
    document.getElementById("out").innerHTML=result;
    
}function multiply() {
    var a,b,result;
    a=document.getElementById("inp1").value;
    a = parseInt(a);
    b=document.getElementById("inp2").value;
    b = parseInt(b);
    result = a*b;
    document.getElementById("out").innerHTML=result;
    
}function devide() {
    var a,b,result;
    a=document.getElementById("inp1").value;
    a = parseInt(a);
    b=document.getElementById("inp2").value;
    b = parseInt(b);
    result = a/b;
    document.getElementById("out").innerHTML=result;
}