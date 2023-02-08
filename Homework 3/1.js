// Необходимо пользователя попросить ввести температуру в градусах Цельсия, 
// преобразовать введенное пользователем значение в соответствующую температуру 
// в градусах по Фаренгейту и вывести в alert сообщение с текстом (пример): 
// Цельсий: 21, Фаренгейт: 69.8
// Где вместо 21 и 69.8 должны быть подставлены соответствующие значения, которые
// были получены ранее.
// Формула перевода градусов Цельсия в градусы Фаренгейта:
// градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32
// Примечания: Пользователь всегда вводит корректное число.
// Советую округлить значение после расчетов, так как в некоторых случаях 
// может получиться "длинная дробь".

function convertCelsiusToFarenheit(celsTemperature) {
    const farenheit = (9 / 5) * celsTemperature + 32
    //const farenheit = Math.round(((9 / 5) * celsTemperature + 32)*100)/100;
    return farenheit
}

const tempCelsius = Number.parseFloat(prompt('Enter temperature in celsius: '));

const tempFarenheit = convertCelsiusToFarenheit(tempCelsius);

alert(`Celsius: ${tempCelsius}, Farenheit: ${tempFarenheit}`);