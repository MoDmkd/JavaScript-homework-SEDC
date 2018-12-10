let animal = {
    name: 'name',
    kind: 'kind',
    speak (message) {
        p.innerHTML = `${this.name} of ${this.kind} kind, says: ${message}`;
    }
}
let body = document.getElementsByTagName("body")[0];
let p = document.createElement("p");
p.id = "p1";
body.appendChild(p);
 
let button = document.getElementById("button");
button.addEventListener("click",function (){
    let p1 = document.getElementById("p1");
    p1.innerHTML = "";
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let input3 = document.getElementById("input3").value;
    if(isNaN(input1) && isNaN(input2)){
        animal.name = input1;
        animal.kind = input2;
        animal.speak(input3);
    } else{
        p1.innerHTML = "Please don't use numbers in the first two fields.";
    }
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
})
