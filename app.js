const form = document.querySelector ('form')
const height_input =document.querySelector('.height');
const weight_input = document.querySelector('.weight');

const result = document.querySelector ('.result');
const close = document.querySelector ('.close-btn');

//click

form.addEventListener('submit', function(e){

    e.preventDefault();
    
    let height = parseInt(height_input.value);
    let weight = parseInt(weight_input.value);
    let text;

    const bmi_score =document.querySelector('.bmi-score');
    const bmi_text = document.querySelector('.bmi_text');

    if (height == '' || height < 0 || isNaN(height)){
        alert("please enter a valid height");
        height_input.focus();
    }else if (weight == ''|| weight < 0 || isNaN (weight)){
        alert("please enter a valid weight");
        weight_input.focus();
    }else{
        const bmi = (weight / ( (height * height))).toFixed(2);//bmi fomular
        //show the result 
        result.Style.display ='block'
        //display the bmi score
        bmi_score.innerHTML = bmi;
        

        
    }


    
})
