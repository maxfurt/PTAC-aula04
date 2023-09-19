'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import {ToastContainer, toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

export default function Alter() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { refresh } = useRouter();

  const handlerLogin = async (e) => {
    e.preventDefault();
    try {
        toast.error("Usuario Alterado Com Sucesso")
  }catch {
      refresh();
      toast.error("erro na aplicação")
    }
  }
  return (
    <div>
      <h1>Alterar</h1>
      <form onSubmit={handlerLogin}>
      <input
          placeholder='Nome'
          type="text"
          onChange={(e) => { setUser({ ...user, text: e.target.value }) }}>
        </input>
        <input
          placeholder='E-mail'
          type="email"
          onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
        </input>
        <input
          placeholder='Senha'
          type='password'
          onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
        </input>
        <button>Entrar</button>
      </form>
      <ToastContainer/>
    </div>
  )
}
