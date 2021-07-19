const calc = document.querySelector('.calc');
const result = document.querySelector('#result');

calc.addEventListener('click', (e) => {
    if(!e.target.classList.contains('calc__btn')) return;

    const value = e.target.innerText;

    switch(value){
        case 'C': 
            result.innerText = '';
            break;

        case '=':
    if(result.innerText.search(/[^0-9*/+-.]/mi) != -1) return;
            result.innerText = eval(result.innerText).toFixed(2);
            break;

        default: 
            result.innerText += value;
    }
    
})