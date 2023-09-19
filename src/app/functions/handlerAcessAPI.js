'use server'
const usuarios = [
{
        nome:"nomemuitomaneiro",
        email:"semideia@ohotmail.com",
        password:"4352",
        token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
},
{
        nome:"nomemaisquemaneiro",
        email:"semideia2pontozero@hotmail.com",
        password:"12345meia78-ta-na-hora-de-molhar-o-biscoito",
        token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
},
{       
        nome:"nomenaomuitomaneiro",
        email:"naotenhoideiaagora@hotmail.com",
        password:"123807123807213897",
        token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}]


const getUserAuthenticated = (user) => {

    let userAuth = {}

    usuarios.map((usuario)=>{
        if (usuario.email == user.email && usuario.password == user.password) {
           userAuth = usuario
   
        }
   }
)

    return userAuth
}


const getUsers = () =>{

    return usuarios
        
}
export { getUsers, getUserAuthenticated };