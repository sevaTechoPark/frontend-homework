'use strict';

const format = (arr, column) => {

    let arrStringFormat = arr.join(',').split(','); // массив чисел => массив строк

    let arrLengthColumn = new Array(column);
    arrLengthColumn.fill(0);

    arrStringFormat.forEach( (item,i) => {

        const index = i % column; // номер столбца

        if ( item.length > arrLengthColumn[index] ) {   // наибольшая длина элемента в столбце

            arrLengthColumn[index] = item.length;

        }

    });

    const size = Math.ceil( arr.length / column );
    let resultFormat = new Array(size);

    arrStringFormat.forEach(  (item,i) => {

        const index = i % column; // номер столбца

        const numberOfSpaces = arrLengthColumn[index] - item.length;  // выравнивание
        
        const prevIndex = ( i - 1 ) % column; // номер предыдущего столбца

        let startSymbol = ( prevIndex == column - 1 ) ? '\n' : ' ';

        if ( i == 0) startSymbol = '';

        const spaces = startSymbol + new Array(numberOfSpaces + 1).join(' ');
     
        resultFormat[i] = spaces + item;

    });

    return resultFormat.join('');

};