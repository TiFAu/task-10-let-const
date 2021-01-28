//Однако в цикле сработает, потому что явно присутствует блок {...}
let sample = { a: 'img', b: 'div', c: 'p' }
for ( let prop in sample ) {
    let elem = document.body.appendChild ( 
        document.createElement ( sample [ prop ] )
    )
    console.log ( elem )
}