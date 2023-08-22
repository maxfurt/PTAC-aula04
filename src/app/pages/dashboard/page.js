import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react"

export default async function Dashboard() {

   let usuarios = getUsers()

    return (
        <div>
            <h1>Dashboard</h1>

            <suspense fallback={<p>carregando...</p>}>
            <ListUsers users={users}/>

            {usuarios.map((usuario) =>(
                <h1>{usuario.nome}</h1>
            ))}
            </suspense>
        </div>
    );
};