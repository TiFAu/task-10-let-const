//💼 Упражнение 4
function test () {
        {                   // блочная область видимости
                var x = 55  // объявлена переменная видимая за блочную область
                let y = 17  // объявлена переменная видимая только в блоной области
        }
        console.log ( x )   // увидит х => 55
        console.log ( y )   // не видит y в блочной области и в глобальной области y  не объявлен => Uncaught ReferenceError: y is not defined
}
test ()                     // 55
                            // Uncaught ReferenceError: y is not defined