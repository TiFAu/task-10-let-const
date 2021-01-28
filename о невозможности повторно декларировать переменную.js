/*Невозможно повторно объявить переменную с таким же идентификатором в той же 
области видимости:*/
function sample () {
    let figure = {
        name: "Radius",
        size: 50
    }
    console.log ( figure )
    let figure = 10
    console.log ( figure )
}
sample ()
/*Будет сгенерировано исключение:
⛔️ Uncaught SyntaxError: Identifier 'figure' has already been declared*/