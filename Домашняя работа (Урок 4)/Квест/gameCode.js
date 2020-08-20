var event, ok, n;
var answers = [];

step(works.a00, works.a1, works.a2, 2);
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        step(works.b00, works.b1, works.b2, 2);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                step(works.d00, works.d1, works.d2, 2);
                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                step(works.d00, works.d1, works.d2, 2);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        step(works.c00, works.c1, works.c2, 2);
        switch (event) {
            case 1: // Второе действие
                step(works.d00, works.d1, works.d2, 2);
                break;
            case 2: // Второе действие
                step(works.d00, works.d1, works.d2, 2);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру!');

if (answers.length == 3) {
    n = +prompt("Узнайте, какой у вас был ответ на каждом из шагов игры (введите номер шага от 1 до 3):");
    while (n < 1 || n > 3 || isNaN(n)) {
        n = +prompt("Вы ввели некорректный номер шага! \nВведите еще раз номер шага:");
    }

    if (n == 1) {
        if (answers[0] == 1) {
            alert(works.a00 + works.a1);
        }
        else {
            alert(works.a00 + works.a2);
        }
    }
    else if (n == 2) {
        if (answers[0] == 1 && answers[1] == 1) {
            alert(works.b00 + works.b1);
        }
        else if (answers[0] == 1 && answers[1] == 2) {
            alert(works.b00 + works.b2);
        }
        else if (answers[0] == 2 && answers[1] == 1) {
            alert(works.c00 + works.c1);
        }
        else {
            alert(works.c00 + works.c2);
        }
    }
    else if (n == 3) {
        if (answers[2] == 1) {
            alert(works.d00 + works.d1);
        }
        else {
            alert(works.d00 + works.d2);
        }
    }
}

//------------------------------------------
function isAnswer(quant, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > quant) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
}

function step(quest, answer1, answer2, quant) {
    do {
        ok = false;
        event = +prompt(quest + answer1 + answer2 + '-1 - Выход из игры');
        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(quant, event);
            answers.push(event);
        }
    } while (!ok);
}

