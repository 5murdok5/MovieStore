import React from 'react'

const Login = () => {
  return (
    <section>
      <h1>Bienvenido a MovieStore</h1>
      <p>Ingrese sus datos para disfrutar de nuestro contenido</p>
      <form>
        <input disabled={true} placeholder='Email' readOnly / >
        <input disabled={true} placeholder='Contraseña' readOnly / >
        <button>Ingresar</button>
        <button>Ingresar como Usuario Anonimo</button>
      </form>
    </section>
  )
}

export default Login
