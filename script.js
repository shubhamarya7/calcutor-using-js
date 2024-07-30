let display = document.getElementById(`input`);
let buttons = document.querySelectorAll(`button`); /** queryselectorall will search for every element with tag button */     /** gives node list  */
let string = '';
let buttonArray = Array.from(buttons);/**converts nodes to array  */

// now to convert array to variable we use for each loop
buttonArray.forEach (btn => {
    btn.addEventListener('click', (event) => { /** do the following event to each button */
        if (event.target.innerHTML == 'DEL') {
            string = string.substring(0,string.lenght-1) /* substring will extract a new string from the given indices ,i.e. if you click del once the string will reduce from the end*/
            display.value = string;
        }
        else if(event.target.innerHTML == 'AC'){
            string = '';
            display.value = string;
        }
        else if(event.target.innerHTML == '='){
            string = eval(string); /** eval is the main function in this calculator, this will take the whole string as a numeric value and evaluate it */
            display.value = string;
        }
        else{
            string += event.target.innerHTML;
            display.value = string;
        }
    });
});


