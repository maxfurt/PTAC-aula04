'use client'

import {ToastContainer, toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

export default function Register() {
  
  return (
    <div>
      <h1>Registrar</h1>
      <form>
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
