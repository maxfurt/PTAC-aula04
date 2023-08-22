import { getUsers } from "@/app/functions/handlerAcessAPI";

export default async function Dashboard() {

   let usuarios = getUsers()

    return (
        <div>
            <h1>Dashboard</h1>

            {usuarios.map((usuario) =>(
                <h1>{usuario.nome}</h1>
            ))}
            
        </div>
    );
};