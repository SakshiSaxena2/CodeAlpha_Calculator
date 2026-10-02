let inputBox = document.getElementById("inputBox");

let buttons = document.querySelectorAll("button");

buttons.forEach(function(button){
    button.addEventListener("click",function() 
    {

        let value = button.innerText;

        if(value == "AC"){
            inputBox.value = "";
        }

        else if (value =="Del"){
            inputBox.value = inputBox.value.slice(0,-1);
        }

        else if (value == "%"){
            let expression = inputBox.value;
            
            let parts = expression.split("*");
            if(parts.length == 2){
                let first = Number(parts[0]);
                let second = Number(parts[1]);
    
                inputBox.value = (first*second) / 100;
            }
        
            else{
                let number = Number(inputBox.value);
                inputBox.value = number / 100;
            }
        }

        else if (value == "="){
            let expression = inputBox.value;
            inputBox.value = eval(expression);
        }

        else {
            inputBox.value = inputBox.value + value;

        }
    
    });
});