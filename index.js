function Reverse(){
    var input = document.querySelector("#UserInput");
    var str = input.value;
    var RS = "";
    for(var i = str.length -1; i >= 0; i--){
        RS += str[i];
    }
    document.querySelector("#NS").innerHTML = RS;
}