const calc = document.querySelector('.calc');
const result = document.querySelector('#result');
calc.addEventListener('click', function(event){
    // Метод contains объекта classList проверяет наличие  класса элемента.
    if(!event.target.classList.contains('calc_btn')) return;
    // создаем постоянную переменную value, где она будет позволяющее задавать или получать текстовое содержимое элемента и его потомков (Innertext)

    const value = event.target.innerText
    switch(value){
        case 'C':
            result.innerText='';
            break;
        case '=':
        result.innerText = eval(result.innerText).toFixed(2);
        break;
        default: 
        result.innerText +=value;
    }
console.log(event.target);
});
// event.target - получить элемент, на котором произошло событие, и подсветить его.(тут уже показать в консоли)