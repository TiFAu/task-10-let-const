/* Обратите внимание, что отсутствие явных фигурных скобок не меняет принцип поведения переменных,
 объявленных с помощью директивы let
 */

var res = []

for ( var item of [ "alpha", "sigma", "omega" ] )
    res.push ( () => console.log ( item ) )

res[0]()  // omega
res[1]()  // omega
res[2]()  // omega
