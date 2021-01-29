//💼 Упражнение 6
for ( let x of [ 1, 2, 3 ] ) {  // цикл по массиву
        x += 1                  // увеличиваем на единицу
        console.log ( x )       // 2,3,4
}
console.log ( x )               // ReferenceError: x is not defined