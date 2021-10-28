let button= document.getElementById("button");
let output= document.getElementById("last-text");
let img =document.getElementById("img");
let attempts = document.getElementById("attempts")

let number = (Math.floor(Math.random()*100));
console.log(number);

let count = 0;

button.addEventListener("click",function(){
    let input = document.getElementById("input").value;
    if ( isNaN(input) || input>100  || input<0) {
        alert("Please enter a valid input!")}

    if (input > number){
        output.innerHTML='Too much! Enter lower value.';
        count+=1
        attempts.innerText = count;
        document.getElementById("riddle").src ="./down.jpg";
    }else if (input < number){
        output.innerHTML='Too low! Enter bigger value.';
        document.getElementById("riddle").src ="./joker_up.jpg";
        count+=1
        attempts.innerText = count;
    }
    if (input == number){
        output.innerHTML= `Congratulations ! Estimated number is ${number} !`;
        document.getElementById("riddle").src ="./deadpool.png";
        count+=1
        attempts.innerText = count;
        
    }
})



