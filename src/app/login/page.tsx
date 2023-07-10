import './login.css'

const Login = () => {
  return (
    <>
      <div className="service-logo">
        <img src="https://pw-music-database.kevinsouza456.repl.co/pw-music-logo.png" />
      </div>

      <section className="container">
        <form>
          <div className="warning hidden">Nome ou Senha incorretos!</div>
          <div className="title">Faça login na sua conta</div>

          <input className="input-nome" type="text" placeholder="Nome" />
          <input className="input-senha" type="password" placeholder="Senha" />
          <div className="input-checkbox">
            <input type="checkbox" id="checkbox-conect" />
            <label htmlFor="checkbox-conect">Manter Conectado</label>
          </div>

          <button className="btn-submit" type="submit">
            Entrar
          </button>
          <div className="info">
            Novo no PwMusic?
            <a href="/signup">Inscreva-se</a>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login
