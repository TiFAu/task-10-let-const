//💼 Упражнение 5
function test () {
    console.log ( x )   // происходит hoisting переменной х задекларированной дерективой var => undefined
    console.log ( y )   // происходит hoisting переменной y задекларированной дерективой let и она пока не доступна (временная мёртвая зона) => ReferenceError: Cannot access 'y' before initialization
    var x = 55          // декларация переменной х 
    let y = 17          // декларация переменной y
}
test ()                 // undefined 
                        // ReferenceError: Cannot access 'y' before initialization это ожидалось