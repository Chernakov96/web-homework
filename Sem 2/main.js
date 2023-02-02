// Задача 2: Получить от пользователя два числа и вывести в диалоговое окно сумму значений, 
// которые ввел пользователь, вывод должен выглядеть так (пример): 
// Результат сложения чисел 5 и 2 равен 7.

// function sumNumber(num1, num2) {
//     return num1 + num2
// }

// const number1 = parseInt(prompt('Enter first number: '));
// const number2 = parseInt(prompt('Enter second number: '));

// alert(`Adding ${number1} and ${number2} will result in ${sumNumber(number1, number2)}`);

// Задача 3: Написать функцию, которая принимает имя пользователя при ее вызове и 
// выводит сообщение с приветствием пользователя по имени в консоль. 
// Проверить работоспособность функции.

// function helloUser(user) {
//     console.log(`Hello, ${user}`);
// }

// const userName = prompt('Type in your name: ');
// helloUser(userName);

// Задача 4: вывести на экран в диалоговом окне текст с сообщением “Вам хорошо живется?”
// и кнопками «ОК», «Отмена», для чего необходимо использовать confirm.
// - При нажатии на кнопку “ОК” вывести в диалоговом окне текст с сообщением 
// “Тогда мы идем к вам!”.
// - При нажатии на кнопку “Отмена” вывести в диалоговом окне текст с сообщением 
// “Ну вы держитесь там!”.

// const answer = confirm('How do you live?');

// if(answer) {
//     alert('We gonna change it!');
// } else {
//     alert('Hold on, be strong!');
// }
// answer ? alert('We gonna change it!') : alert('Hold on, be strong!');

// Задача 5: перепишите код, используя конструкцию switch-case, 
// запрашивая продукт через диалоговое окно.
 
// <script>
// let product = "Бананы";
 
// if (product == "Мандарины") {
//   alert('Мандарины стоят 100 руб/кг.');
// } else if (product == "Бананы") {
//   alert('Бананы и груши стоят 70 руб/кг.');
// } else if (product == "Груши") {
//   alert('Бананы и груши стоят 70 руб/кг.');
// } else {
//   alert('Нет такого продукта.');
// }
// </script>

// let product = 'Bananas'

// switch(product) {
//     case "Mandarin":
//         alert('Mandarins cost 100 dolars')
//         break;
//     case "Peaches":
//         alert('Mandarins cost 100 dolars')
//     case "Apples":
//         alert('Mandarins cost 100 dolars')
//         break;
//     default:
//         alert('There is no such product')

// }

// Функция getMaxEvenElement принимает массив с целыми числами, необходимо 
// реализовать функцию так, чтобы она возвращала значение большего элемента массива, 
// который записан в четном индексе включая 0.

function getMaxEvenElement(arr) {
    return Math.max(...arr.filter((_, i) => i % 2 == 0));
}
console.log(getMaxEvenElement([5, 7, -1, 12, 3, 0])); // 5
console.log(getMaxEvenElement([4, -12, 29, 6, 31, 92, -50])); // 31