/* 1. Сделайте функцию, которая отнимает от первого числа второе и делит на третье. Числа передаются параметром. */

function arithmetic(a,b,c) {
    return (a+b)/c;
}

console.log(arithmetic(1, 2, 3));

/* 2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число передается параметром. */

function degrees(a) {
    let cube = Math.pow(a, 3);
    let square = Math.pow(a, 2);

    return cube, square;
}

console.log(degrees(5));

/* 3. Напишите функции min и max, которые возвращают меньшее и большее из чисел a и b. */

function min(a,b) {
    if(a < b) {
       return a;
    } else {
       return b;
    } 
}

console.log(min(3,9));

function max(a,b) {
    if(a > b) {
       return a;
    } else {
       return b;
    } 
}

console.log(max(3,9));

/* 4. Напишите две функции: первая ф-ция должна возвращать массив с числовыми значениями, диапазон которых должен вводиться пользователем с клавиатуры; вторая – выводить полученный массив. */

function createArray() {
    let arr = [];
    let i = 0;
    let a = prompt('Введите первое число диапазона массива');
    let b = prompt('Введите второе число диапазона массива');

    if(a < b) {

        for(i = a; i <= b; i++) {
            arr.push(i);
        }
    }else {
        for(i = b; i <=a; i++) {
            arr.push(i);
        }
    }

    return arr;    
}

function outputArray() {
    
    console.log(createArray());
}

outputArray()

/* 5. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное — false. */

function isEven(even) {

    if (even % 2 == 0) {
        return true;

    }else {
        return false;
    }
}

console.log(isEven(7));

/* 6. Напишите ф-цию, в которую передается массив с целыми числами. Верните новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи. */

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function passArray(arr){
    let arr2 = [];

    for (let i = 0; i < arr.length; i++) {
        if(isEven(arr[i])) {
            arr2.push(arr[i]);
        }
    }
    return arr2;
}

console.log(passArray(arr1));

/* 7. Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные циклы):

1 
22 
333 
4444 
55555 
666666 
7777777 
88888888
999999999

Кол-во рядов должно вводиться параметром. Если пользователь ввел доп. параметр, непредусмотренный ф-цией по умолчанию - один любой символ, кроме пробела, то пирамида должна быть нарисована этим символом, например: 

* 
** 
*** 
**** 
***** 
****** 
******* 
******** 
********* */

function pyramide(a) {
    let str = '';

    for(let i = 1; i <= a; i++) {
        str = '';

        for(let j = 1; j <= i; j++) {
            str += i;
        }

        console.log(str);
    }    
}

pyramide(prompt('Введите количество рядов'));

/* 8. Напишите ф-цию, которая рисует равнобедренный треугольник из звездочек:

    * 
   *** 
  ***** 
 ******* 
*********

Kол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же фцию, но которая выведет перевернутый треугольник. */

function isoscelesTriangle(a) {
    let str = '';
    
    for(let i = 1; i <= a; i++) {
        str = '';
    
        for(let j = 1; j <= (a - i); j++) {
            str += ' ';
        }
    
        for(let j = 1; j <= (i*2-1); j++) {
            str += '*';
        }
    
        console.log(str);
    }
}

isoscelesTriangle(prompt('Введите количество рядов'));

function isoscelesTriangleReverse(a) {
    let str = '';
    
    for (let i = 1; i <= a; i++) {
        str = '';
    
        for(let j = 1; j <= (i - 1); j++) {
            str += ' ';
        }
    
        for(let j = (a*2-i); j >= i; j--) {
            str += '*';
        }
    
        console.log(str);   
    }
}

isoscelesTriangleReverse(prompt('Введите количество рядов'));

/* 9. Напишите ф-цию, которая возвращает массив заполненный числами Фибоначи от 0 до 1000. */

function fib() {
    let arr = [];
    let num = 0;

    for(let i = 0; ; i++) {

        if ((i == 0 || i == 1) && arr[i] == undefined) {
            arr.push(i);
            continue;
        }

        num = arr[i-1] + arr[i-2];
        if (num >= 1000) break;

        arr.push(num);      
    }

    console.log(arr);
}

fib();

/* 10. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее). Исп. Рекурсию. */

let num = 123456789;

function summa(num) {
    if(num === 0) {
        return 0;
    }
    return (num - 1) % 9 + 1;
}

console.log(summa(num));

/* 11. Дан массив с числами (передается параметром). Выведите последовательно его элементы, используя рекурсию и не используя цикл. */

array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

i = 0;

function output(a) {
    if (i < a.length) {
        
        console.log(a[i]);

        i++;

        output(a);    
    }
}

output(array);

/* 12. Напишите ф-цию, запрашивающую имя, фамилия, отчество и номер группы студента и выводящую введённые данные в следующем виде:

***************************** 
* Домашняя работа: «Функции» * 
* Выполнил: студент гр. W4017 * 
* Иванов Иван Иванович * 
***************************** 

Размер рамки должен определятся автоматически по самой длинной строке. Рамку вывести в консоль. */

function card() {
    let fio = prompt('Ваше ФИО', 'Иванов Иван Иванович');
    let group = prompt('Номер группы', 'BE105');

    let line1 = 'Домашняя работа "Функции"';
    let line2 = `Выполнил: студент гр. ${group}`;
    let line3 = fio;

    let length = 0;

    if (line1.length > length) length = line1.length;
    if (line2.length > length) length = line2.length;
    if (line3.length > length) length = line3.length;

    let flLine = '';

    for (let i = 1; i <= (length + 4); i ++) {
        flLine += '*';
    }

    function spaces(length, maxLength) {
        let s = '';

        for (let i = 1; i <= (maxLength-length); i++) {
            s += ' ';
        }

        return s;
    }

    console.log(flLine);
    console.log('* ' + line1 + spaces(line1.length, length) + ' *');
    console.log('* ' + line2 + spaces(line2.length, length) + ' *');
    console.log('* ' + line3 + spaces(line3.length, length) + ' *');
    console.log(flLine);


    function lines(line = '', maxLength = length) {
        let max = (maxLength + 4), s = '*';

        if (line != '') {
            max = (maxLength - line.length);
            s = ' ';
        }

        for (let i = 1; i <= max; i++, line += s);

        if (s == ' ') line = `* ${line} *`;

        return line;
    }

    console.log(lines());
    console.log(lines(line1));
    console.log(lines(line2));
    console.log(lines(line3));
    console.log(lines());

    console.log(length);
}

card();

/* 13. Напишите ф-цию, которая должна проверить правильность ввода адреса эл. почты, неиспользуя регулярные выражения. Почта верна при условии: a. весь адрес не должен содержать русские буквы и спецсимволы, кроме одной «собачки», знака подчеркивания, дефиса и точки, причем они не могут быть первыми и последними в адресе, и идти подряд, например: «..», «@.», «.@» или «@@», «_@», «@-», «--» и т.п. b. имя эл. почты (до знака @) должно быть длиной более 2 символов, причем имя может содержать только буквы, цифры, но не быть первыми и единственными в имени, и точку; c. после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.) не может быть длиной менее 2 и более 11 символов. */

function validEmail(email) {
    let trueChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '@', '.', '-', '_'];

    let trueSpChars = ['@', '.', '-', '_'];

    let error = false;

    if (!isNaN(email[0])) error = true;

    if (email.indexOf('@') <= 1) error = true;

    if (email.indexOf('@') == -1 || 
        email.indexOf('@') != email.lastIndexOf('@')
    ) {
        error = true;
    }

    if (email.lastIndexOf('.') < email.indexOf('@')) {
        error = true;
    }

    let diff = email.length-1 - email.lastIndexOf('.');
    
    if (diff < 2 || diff > 11) {
        error = true;
    }

    for (let i = 0; i < email.length-1; i++) {
        if (trueChars.indexOf(email[i]) == -1) {
            error = true;
            break;
        }

        if (trueSpChars.indexOf(email[i]) != -1 && (
            i == 0 || i == email.length-1 ||
            trueSpChars.indexOf(email[i+1]) != -1 ||
            trueSpChars.indexOf(email[i-1]) != -1
        )) {
            error = true;
            break;
        }
    }


    return !error;
}


console.log(validEmail('name@gmail.com'));
console.log(validEmail('name@gmail.c'));