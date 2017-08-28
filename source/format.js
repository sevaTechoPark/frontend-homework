'use strict';

const format = (arr, column) => {

    const arrStringFormat = arr.map(item => item.toString()); 		// массив чисел => массив строк
    const arrLengthColumn = new Array(column);		  
    arrLengthColumn.fill(0);

    arrStringFormat.forEach( (item, i) => {
        const index = i % column; 									// номер столбца
        if ( item.length > arrLengthColumn[index] ) {   			// наибольшая длина элемента в столбце
            arrLengthColumn[index] = item.length;
        }
    });

    return arrStringFormat.reduce(  (resultFormat, item, i) => {
        const index = i % column; 									// номер столбца
        let numberOfSpaces = arrLengthColumn[index] - item.length;  // выравнивание
        if (index != 0) {											// не первая колонка
        	numberOfSpaces++;							
        }
        const spaces = new Array(numberOfSpaces + 1).join(' ');
        resultFormat += spaces + item + ( (index == column - 1 && i != arrStringFormat.length - 1) ? '\n' : '' );

        return resultFormat;        
    }, '');
};