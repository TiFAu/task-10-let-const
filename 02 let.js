/* Обратите внимание, что отсутствие явных фигурных скобок не меняет принцип поведения переменных,
 объявленных с помощью директивы let
 */

var res = []

for ( let item of [ "alpha", "sigma", "omega" ] )
    res.push ( () => console.log ( item ) )

res[0]()  // alpha
res[1]()  // sigma
res[2]()  // omega