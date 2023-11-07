'use server'

const url = "https://aula-17-10-xi.vercel.app"
const getUserAuthenticated = async (user) =>{
    
    const responseOfApi = await fetch(url + "/user/authenticated",
    {
        cache: "no-cache",
        method:"POST",
        headers:{"Content-Type":"Application/json"},
        body: JSON.stringify(user)
    });

    const userAuth = await responseOfApi.json();
    return userAuth;
}

const getUsers = () =>{
  
}  

const postUser = async(user) =>{
    try {
        const responseOfApi = await fetch(url+ "/user", {
        method:"POST",
        headers: {'content-Type':'Aplication/json'},
        body: JSON.stringify(user)
        })
        const userSave = await responseOfApi.json()
        return userSave
    } catch {
        return null
    }
}

export { getUsers, getUserAuthenticated, postUser };


/*const getUserAuthenticated = (user) => {

    let userAuth = {}

    usuarios.map((usuario)=>{
        if (usuario.email == user.email && usuario.password == user.password) {
           userAuth = usuario
   
        }
   }
)

    return userAuth
}
*/