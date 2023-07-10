import './denied.css'

const Denied = () => {
  return (
    <>
      <section className="container">
        <div className="title-1">Ops...</div>
        <div className="title-2">
          Você precisa fazer login para acessar o serviço
        </div>

        <div className="button-login">
          <button>Login</button>
        </div>
      </section>
    </>
  )
}

export default Denied
