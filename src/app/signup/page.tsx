import './signup.css'

const Signup = () => {
  return (
    <>
      <a href="/" className="service-logo">
        <img src="https://pw-music-database.kevinsouza456.repl.co/pw-music-logo.png" />
      </a>

      <section className="container">
        <form>
          <div className="warning hidden"></div>
          <div className="title">Crie uma conta PwMusic</div>

          <input className="input-nome" type="text" placeholder="Nome" />
          <input className="input-senha" type="password" placeholder="Senha" />
          <div className="input-checkbox">
            <input type="checkbox" id="checkbox-conect" />
            <label htmlFor="checkbox-conect">Manter Conectado</label>
          </div>

          <button className="btn-submit" type="submit">
            Criar
          </button>
          <div className="info">
            Tem uma conta?
            <a href="/login">Conecte-se</a>
          </div>
        </form>
      </section>
    </>
  )
}

export default Signup
