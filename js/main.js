let input = document.getElementById("screen");
let selectedAmal = '';
let selectedAmalOrginal = '';
let numberOne = 0;

function addNumber(number) {
    if ( input.value.indexOf("!") !== -1){
        input.value = "";
    }

    if (input.value === "0" && number !== '.'  || selectedAmal.length > 0) {
        input.value = number;
        selectedAmal = "";
    } else {
        if (input.value.indexOf('.') === -1 || number !== '.') {
            input.value += number;
        }
    }
}




function action(amal) {
    selectedAmal = amal;
    selectedAmalOrginal = amal;
    numberOne = input.value;


}


function calc() {
    let numberTwo = input.value;
    let result = 0;

    if (selectedAmalOrginal === 'add'){
        result = parseFloat(numberOne) + parseFloat(numberTwo);
    } else if (selectedAmalOrginal === "minus"){
        result = numberOne - numberTwo;
    } else if(selectedAmalOrginal === "multiply"){
        result = numberOne * numberTwo;
    } else if (selectedAmalOrginal === "divide"){
        if(numberTwo === 0)
        result = numberOne / numberTwo;
    }

    input.value = result;
}

function  clearScreen() {
    input.value = "0";
    selectedAmal = "";
    selectedAmalOrginal = "";
    numberOne = 0;
}

document.addEventListener("ke   ydown", function (event){
    if (event.keyCode === 12){
        addNumber(5);
    } else if (event.keyCode === 101){
        addNumber(0)
    } else if (event.keyCode === 97){
        addNumber(1)
    }else if (event.keyCode === 98){
        addNumber(2)
    }else if (event.keyCode === 99){
        addNumber(3)
    }else if (event.keyCode === 100){
        addNumber(4)
    }else if (event.keyCode === 102){
        addNumber(6)
    }else if (event.keyCode === 103){
        addNumber(7)
    }else if (event.keyCode === 104){
        addNumber(8)
    }else if (event.keyCode === 105){
        addNumber(9)
    }else if (event.keyCode === 110){
        addNumber('.')
    }else if (event.keyCode === 13){
        calc();
    }else if (event.keyCode === 109){
        action('minus')
    }else if (event.keyCode === 107){
        action('add')
    }else if (event.keyCode === 106){
        action('multiply')
    }else if (event.keyCode === 111){
        action('divide')
    }else if (event.keyCode === 27){
        clearScreen();
    }
});




function foiz() {
    let foiz = 0;
    foiz = input.value;
    if(foiz > 0) {
        foiz = foiz / 100;
        input.value = foiz;
    } else {

        input.value = "Musbat son kiriting!!";
        return;
    }
}


function ildiz() {
    let  ildiz = 0;
    ildiz = input.value;
    if(ildiz > 0){
       ildiz = Math.sqrt(ildiz);
       input.value = ildiz;
    } else {

        input.value = "Musbat son kiriting!!";
        return;
    }
}

function  kivadrat() {
    let kivadrat = 0;
    kivadrat = input.value;
    input.value = kivadrat * kivadrat;
}

function ortga() {
    input.value = input.value.slice( 0 , input.value.length-1);
    // console.log(word12.slice(0 , word12.length-1));
}