'use strict';

const format = (arr, column) => {

    let arrStringFormat = arr.join(',').split(','); // массив чисел => массив строк

    let arrLengthColumn = new Array(column);
    arrLengthColumn.fill(0);

    arrStringFormat.forEach( (item, i) => {

        const index = i % column; // номер столбца

        if ( item.length > arrLengthColumn[index] ) {   // наибольшая длина элемента в столбце

            arrLengthColumn[index] = item.length;
        }

    });

    const size = Math.ceil( arr.length / column );
    let resultFormat = arrStringFormat.reduce(  (result,item, i) => {

        const index = i % column; // номер столбца

        let numberOfSpaces = arrLengthColumn[index] - item.length;  // выравнивание

        if (index != 0) numberOfSpaces++;	// не первая колонка

        const spaces = new Array(numberOfSpaces + 1).join(' ');

        result += spaces + item + ( (index == column - 1 && i != arrStringFormat.length - 1) ? '\n' : '' );

        return result;
        
    }, '');

    return resultFormat;

};