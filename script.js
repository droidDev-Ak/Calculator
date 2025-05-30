//Basic operations 
let string = "";
let exp=true;
const buttons = document.querySelectorAll(".btn");
const output = document.querySelector(".output"); 
let arr=[];
let i=0;
if(window.innerWidth > 450){
    document.querySelector(".mobile-functions").classList.add("inactive");}

document.querySelector("#equals").addEventListener("click", () => {
    arr.push(string+"="+eval(string));
    console.log(arr);
    document.querySelector(".history-list").innerHTML+=`<li>${arr[i]}</li>`;
    i++;
});
document.querySelector(".close").addEventListener("click",()=>{
document.querySelector(".history").classList.toggle("inactive");
document.querySelector('.dropdown').value = '0';
})


buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let buttonText = e.target.innerHTML;
    if(buttonText === "x") {
        buttonText="*";
    }
    else if(buttonText === "÷") {
        buttonText="/";
    }


    console.log(buttonText); 
    
    if (buttonText === "=") {
      string = eval(string);
        if(string!=string){

            output.value="Not defined";

        }
        else{

            output.value = string;
        }
    }
    else if(buttonText=="%"){
        string = eval(string) / 100;

    }
    else if(buttonText === "+/-"){
        if(string.startsWith("-")){
            string = string.slice(1); 

        }
        else{
            string = "-" + string; 
        }

        output.value = string; 
    } 
    else {
        if(buttonText === "AC") {
            string="";
            output.value = string; 
        }
        else{

            string += buttonText;
            output.value = string; 
        }
    }
  });
});

function history(){
    console.log("history");
    
document.querySelectorAll(".history").classList.toggle("inactive");
}

function expand(){
    console.log("expand");
   
    document.querySelector(".container").classList.toggle("container-expand");

    document.querySelector(".functions").classList.toggle("functions-expand");
    document.querySelector(".extra-functions").classList.toggle("inactive");
    
document.querySelector('.dropdown').value = '0';

}
const dropdown = document.querySelector(".dropdown");

dropdown.addEventListener("change",(e)=>{
    console.log(e.target.value);
    if(e.target.value=="1"){
        history();
    }

    else if(e.target.value=="2"){
        expand();
    }
    
})

// For Swipe for mobile phones



 const first=document.querySelector('.functions');

        let touchStartX = 0;
        let touchStartY = 0;
        let touchEndX = 0;
        let touchEndY = 0;

        first.addEventListener('touchstart',(e)=>{
        if(e.touches.length>1) return; // Ignore multi-touch
          touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;

        })       
        first.addEventListener('touchend',(e)=>{
            if(e.touches.length>1) return;
            touchEndX=e.changedTouches[0].clientX;
            touchEndY=e.changedTouches[0].clientY;


            const delX= touchEndX - touchStartX;
            const delY= touchEndY - touchStartY;
            if(Math.abs(delX) > Math.abs(delY)){

                if(delX > 0){
                    document.querySelector(".functions").classList.toggle("inactive");
                    document.querySelector(".mobile-functions").classList.toggle("inactive");

    


                   
                } else {

                    console.log("Swipe left");
                    
                }
            } else {

                if(delY > 0){
                    console.log("Swipe down");
                    
                   
                } else {
                    console.log("Swipe up");
                    
                }
            }
        })