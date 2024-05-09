tittle = " ";
document.getElementById("tittle").innerHTML = tittle
off();
function clr(){
    tittle = " ";
    tittle2 = " ";
    document.getElementById("tittle").innerHTML = tittle;
}
function funny(x){
    if (power == false) return;
    tittle2 = tittle
    document.getElementById("tittle").innerHTML = tittle2 + x;
    tittle = tittle2 + x;
    tittle2 = tittle
}
function enter(x) {
    let num2 = 1
    let arr = x.split(" ");
    if (arr[0] == " " || arr[0] == ""){
        arr.shift();
    }
    console.log(arr);
    for(let i = 2; i < arr.length; i += 2){
        console.log(i);
        if(arr[i - 1] == "+"){
            num2 = Number(arr[i - 2]) + Number(arr[i])
            arr[i] = num2
        } else if(arr[i - 1] == "-") {
            num2 = Number(arr[i - 2]) - Number(arr[i])
            arr[i] = num2
        } else if(arr[i - 1] == "*") {
            num2 = Number(arr[i - 2]) * Number(arr[i])
            arr[i] = num2
        } else if(arr[i - 1] == "/") {
            num2 = Number(arr[i - 2]) / Number(arr[i])
            arr[i] = num2
        }
        console.log(num2)
    }
    document.getElementById("tittle").innerHTML = num2;
    tittle = num2
    tittle2 = num2

}
function on(){
    power = true
    document.getElementById("tittle").style.backgroundColor = "aquamarine";
}
function off(){
    power = false
    clr();
    document.getElementById("tittle").style.backgroundColor = "black";
}