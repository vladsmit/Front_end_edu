var event, ok;

function step(quest, answer1, answer2, answer3, answer4, rightAnswer, quant, price) {
	do {
		event = +prompt(quest + "\n1: " + answer1 + "\n2: " + answer2 + "\n3: " + answer3 + "\n4: " + answer4 + "\n\nЕсли хотите выйти из игры, то введите -1");
		ok = false;

		if (event == -1) {
			return event = -1;
			break;
		}
		else {
			ok = isAnswer(event, quant);
			if (event == rightAnswer) {
				alert("И это правильный ответ! У вас в банке - " + price + " рублей!");
			}
			else {
				alert("К сожалению, это неправильный ответ! \nВы проиграли!");
				return event = -1;
				break;
			}
		}
	} while (!ok);
}

function isAnswer(event, quant) {
	if (event < 1 || event > quant) {
		return false;
	}
	else if (event == isNaN(event)) {
		return false;
	}
	return true;
}


while (true) {
	alert("Добрый вечер!" + "\nВ эфире программа 'Кто хочет стать миллионером'!" + "\nНу что, давайте начнем!");
	step(quest.q01, quest.a01, quest.a02, quest.a03, quest.a04, 3, quest.a0, 100);
	if (event == -1) {
		break;
	}
	step(quest.q02, quest.b01, quest.b02, quest.b03, quest.b04, 2, quest.b0, 1000);
	if (event == -1) {
		break;
	}
	step(quest.q03, quest.c01, quest.c02, quest.c03, quest.c04, 1, quest.c0, 50000);
	if (event == -1) {
		break;
	}
	step(quest.q04, quest.d01, quest.d02, quest.d03, quest.d04, 4, quest.d0, 1000000);
	break;
}

alert("Спасибо за игру!");