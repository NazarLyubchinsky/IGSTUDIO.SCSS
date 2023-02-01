alert('Задумайте число!');
alert('Умножьте задуманное число на 2!');
alert('Прибавьте к полученному результату 7!');

const userNumber = Number(prompt('Введите что получилось'));

if (userNumber) {
	alert((userNumber - 7) / 2);
	console.log(typeof userNumber)
} else {
	alert('введіть цифри!!')
}
