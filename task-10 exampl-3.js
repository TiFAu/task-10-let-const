//💼 Упражнение 3
switch ( figure ) {                                 // оператор ветвления кода с операндом figure
    case 'circle':                                  // при figure =  'circle'
                let elem = createElement ( 'div' )  /* декларируется переменная elem = и здесь возникает вопрос "createElement чей метод? где его хозяин" =>VM1430:1 Uncaught ReferenceError: createElement is not defined
    at <anonymous>:1:12 По логике происходит раньше и все же ввиду того что браузер опрашивает для выделения памяти под переменные Uncaught SyntaxError: Identifier 'elem' has already been declared всплывет ранее */
                break                               // последующий выход  
        case 'picture':                             // при figure =  'picture'
                let elem = createElement ( 'img' )  // попытка задекларировать elem в той же области видимости => Uncaught SyntaxError: Identifier 'elem' has already been declared
                break
        default:
                let elem = undefined
                break
}