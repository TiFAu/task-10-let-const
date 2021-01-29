//💼 Упражнение 1
let getPrivate, setPrivate                      //декларируем две переменных

{                                               //инициализируем их как объеты
        let privateVar                          //декларируем  переменную privateVar

        setPrivate = newValue =>                //инициализируем setPrivate как стрелочную функцию с аргументом newValue,
                privateVar = newValue           //котора присвеивает переменной privateVar значение   newValue

        getPrivate = () => privateVar           //инициализируем getPrivate которая принимает значение  privateVar

}

setPrivate ( 'exist' )                          //вызываем setPrivate и передаем ей в качестве параметра строку 'exist'
//Что вернет ?
getPrivate ()                                   //так как функция setPrivate определяет значение переменной privateVar
                                                // getPrivate определена как равная privateVar
//"exist" - что собственно и ожидалось

//Что вернет  ?
console.log ( privateVar )                      //так как переменна privateVar декларирована в блоке {} следовательно в глобальной области видимости переменная с таким именим отсутствует
/*VM613:1 Uncaught ReferenceError: privateVar is not defined
    at <anonymous>:1:15*/
// что и требовалось доказать