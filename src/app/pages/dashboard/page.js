import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react"
import  ListUsers  from "@/app/components/ListUsers"


export default async function Dashboard() {

   let usuarios = getUsers()

    return (
        <div>
            <h1>Dashboard</h1>

            <Suspense fallback={<p>carregando...</p>}>
            <ListUsers users={usuarios}/>

            </Suspense>
        </div>
    );
};