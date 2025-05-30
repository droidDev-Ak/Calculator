//Basic operations 
let string = "";
let exp = true;
const buttons = document.querySelectorAll(".btn");
const output = document.querySelector(".output");
let arr = [];
let i = 0;
let mobile=false;
let inverseMode = false;

if (window.innerWidth > 390 && window.innerWidth <450) {
    document.querySelector(".mobile-functions").classList.add("inactive");
    mobile=true;
}
if(mobile) document.querySelector(".inactive").classList.remove("inactive");

function history() {
    console.log("history");
    historyy = true;
    console.log("2");

    document.querySelector(".history").classList.toggle("inactive");
}





document.querySelector("#equals").addEventListener("click", () => {
    arr.push(string + "=" + eval(string));
    console.log(arr);
    document.querySelector(".history-list").innerHTML += `<li>${arr[i]}</li>`;
    i++;
});
document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".history").classList.toggle("inactive");
    document.querySelector('.dropdown').value = '0';
})

document.querySelector("#inv").addEventListener("click", () => {
     inverseMode = !inverseMode;
  const sinBtn = document.querySelector("#sin");
  const cosBtn = document.querySelector("#cos");
  const tanBtn = document.querySelector("#tan");

  if (sinBtn.innerText === "sin") {
    sinBtn.innerText = "sin⁻¹";
    cosBtn.innerText = "cos⁻¹";
    tanBtn.innerText = "tan⁻¹";
  } else {
    sinBtn.innerText = "sin";
    cosBtn.innerText = "cos";
    tanBtn.innerText = "tan";
  }
});
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let buttonText = e.target.innerHTML;

    if (buttonText === "x") {
      buttonText = "*";
    } else if (buttonText === "÷") {
      buttonText = "/";
    }

    console.log(buttonText);

    if (buttonText === "=") {
      try {
        string = eval(string);
        if (string != string) {
          output.value = "Not defined";
        } else {
          output.value = string;
        }
      } catch (err) {
        output.value = "Error";
      }
    }

    else if (buttonText === "%") {
      try {
        string = eval(string) / 100;
        output.value = string;
      } catch {
        output.value = "Error";
      }
    }

    else if (buttonText === "+/-") {
      if (string.startsWith("-")) {
        string = string.slice(1);
      } else {
        string = "-" + string;
      }
      output.value = string;
    }

    else if (buttonText === "AC") {
      string = "";
      output.value = "";
    }

    // 🔬 Extra Functions
    else if (buttonText === "√") {
      try {
        string = Math.sqrt(eval(string));
        output.value = string;
      } catch {
        output.value = "Error";
      }
    }

    else if (buttonText === "x²") {
      try {
        string = Math.pow(eval(string), 2);
        output.value = string;
      } catch {
        output.value = "Error";
      }
    }

    else if (buttonText === "x³") {
      try {
        string = Math.pow(eval(string), 3);
        output.value = string;
      } catch {
        output.value = "Error";
      }
    }

    else if (buttonText === "e^x") {
      try {
        string = Math.exp(eval(string));
        output.value = string;
      } catch {
        output.value = "Error";
      }
    }

    else if (buttonText === "π") {
      string += Math.PI.toFixed(6);  // Approx 3.141593
      output.value = string;
    }

    else if (buttonText === "sin") {
      try {
        string = Math.sin(eval(string) * Math.PI / 180).toFixed(6);
        output.value = string;
      } catch {
        output.value = "Error";
      }
    }

    else if (buttonText === "cos") {
      try {
        string = Math.cos(eval(string) * Math.PI / 180).toFixed(6);
        output.value = string;
      } catch {
        output.value = "Error";
      }
    }

    else if (buttonText === "tan") {
      try {
        string = Math.tan(eval(string) * Math.PI / 180).toFixed(6);
        output.value = string;
      } catch {
        output.value = "Error";
      }
    }

    else if (buttonText === "sin" || buttonText === "sin⁻¹") {
  const val = parseFloat(output.value);
  output.value = inverseMode ? Math.asin(val).toFixed(4) : Math.sin(val).toFixed(4);
  string = output.value;
}
else if (buttonText === "cos" || buttonText === "cos⁻¹") {
  const val = parseFloat(output.value);
  output.value = inverseMode ? Math.acos(val).toFixed(4) : Math.cos(val).toFixed(4);
  string = output.value;
}
else if (buttonText === "tan" || buttonText === "tan⁻¹") {
  const val = parseFloat(output.value);
  output.value = inverseMode ? Math.atan(val).toFixed(4) : Math.tan(val).toFixed(4);
  string = output.value;
}

    else {
      string += buttonText;
      output.value = string;
    }
  });
});



function expand() {
    console.log("expand");

    document.querySelector(".container").classList.toggle("container-expand");

    document.querySelector(".functions").classList.toggle("functions-expand");
    document.querySelector(".extra-functions").classList.toggle("inactive");

    document.querySelector('.dropdown').value = '0';

}
const dropdown = document.querySelector(".dropdown");

dropdown.addEventListener("change", (e) => {
    console.log(e.target.value);
    if (e.target.value == "1") {
        history();
    }

    else if (e.target.value == "2") {
        expand();
    }

})

// For Swipe for mobile phones



const first = document.querySelector('.container');

let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

first.addEventListener('touchstart', (e) => {
    if (e.touches.length > 1) return; // Ignore multi-touch
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    console.log("Touch started at: ", touchStartX, touchStartY);


})
first.addEventListener('touchend', (e) => {
    if (e.touches.length > 1) return;
    touchEndX = e.changedTouches[0].clientX;
    touchEndY = e.changedTouches[0].clientY;


    const delX = touchEndX - touchStartX;
    const delY = touchEndY - touchStartY;
    if (Math.abs(delX) > Math.abs(delY)) {

        if (delX > 0) {
            document.querySelector(".functions").classList.toggle("inactive");
            document.querySelector(".mobile-functions").classList.toggle("inactive");

        }
    }
})