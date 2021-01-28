//:warning: let не создает свойств в глобальном объекте

var x = 25
let z = 15
window.x    //  25
window.z    //  undefined