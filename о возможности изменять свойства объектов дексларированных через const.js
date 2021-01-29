//Если константа является объектом, то значения ее свойств могут быть изменены:
const USER = {
    login: "admin",
    role: "admin",
    status: "active",
    rights: [ "read", "write", "delete" ]
}

USER.login = "student"
USER.role = "user"
USER.rights = [ "read" ]