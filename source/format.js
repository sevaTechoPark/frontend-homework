'use strict';

const format = (arr,column) => {

    let arrStringFormat = arr.join(',').split(','); // массив чисел => массив строк

    let arrLengthColumn = new Array(column);
    arrLengthColumn.fill(0);

    arrStringFormat.forEach( function (item,i,arr) {

        let index = i % column; // номер столбца

        if ( item.length > arrLengthColumn[index] ) {   // наибольшая длина элемента в столбце

            arrLengthColumn[index] = item.length;

        }

    });

    let size = Math.ceil( arr.length / column );
    let resultFormat = new Array(size);

    arrStringFormat.forEach( function (item,i,arr) {

        let index = i % column; // номер столбца

        let numberOfSpaces = arrLengthColumn[index] - item.length;  // выравнивание

        let spaces = new Array(numberOfSpaces + 1).join(' ');

        let endSymbol;

        if ( i == arrStringFormat.length - 1 ) {

            endSymbol = '';

        } else if ( index == column - 1 ) {

            endSymbol = '\n';

        } else {

            endSymbol = ' ';
        }

        let formatItem = spaces + item + endSymbol;

        resultFormat[i] = formatItem;

    });

    return resultFormat.join('');

};