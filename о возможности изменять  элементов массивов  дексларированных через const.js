//Если константа является объектом, то значения ее элементов могут быть изменены:
const RIGHTS = [ "read", "write", "delete" ]
RIGHTS [ 1 ] = null
RIGHTS [ 2 ] = null