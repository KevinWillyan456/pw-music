'use client'

import { IonIcon } from '@ionic/react'
import { close, volumeHigh, newspaper } from 'ionicons/icons'
import './index.css'

const Index = () => {
  return (
    <>
      <div className="terms-of-use">
        <IonIcon icon={newspaper} />
      </div>

      <div className="terms-of-use-text hidden">
        <div className="box-wrapper">
          <div className="close" id="terms-of-use-close">
            <IonIcon icon={close} />
          </div>
          <div className="title">Termos de Uso</div>
          <div className="text">
            Ao assinar o Purchaseway Music você concorda com o uso de Cookies em
            seu navegador, destinado para o funcionamento correto do sistema.
            Não há garantia que o serviço esteja funcionando o tempo inteiro. A
            criação de contas é responsabilidade do cliente, nós não temos um
            método de recuperação de senhas. Não nos responsabilizamos com o
            consumo exagerado de rede, recomendamos que evite usar os dados
            móveis ao utilizar o sistema.
          </div>
        </div>
      </div>

      <header className="cabecalho">
        <div className="service-logo">
          <img src="https://pw-music-database.kevinsouza456.repl.co/pw-music-logo.png" />
        </div>

        <div className="box-wrapper">
          <ul className="list-options">
            <li>
              <a href="#">Topo</a>
            </li>
            <li>
              <a href="#section-listen">Escute</a>
            </li>
            <li>
              <a href="#section-very-high-quality">Som</a>
            </li>
            <li>
              <a href="#section-reactive">Reativo</a>
            </li>
          </ul>
          <div className="button-login">
            <button id="login">Login</button>
          </div>
        </div>
      </header>

      <section className="section-banner">
        <div className="title-1">As melhores Playlists</div>
        <div className="title-2">Inscreva-se agora no PwMusic</div>

        <div className="button-register">
          <button id="signup">Cadastrar-se</button>
        </div>

        <div className="title-3">
          Necessário a criação de conta para acessar nossos serviços
        </div>
      </section>

      <section className="section-listen" id="section-listen">
        <div className="box-wrapper">
          <div className="title-1">Escute em dispositivos diferentes</div>
          <div className="title-2">Suporte para Desktop e Mobile</div>
        </div>
      </section>

      <section
        className="section-very-high-quality"
        id="section-very-high-quality"
      >
        <div className="box-wrapper">
          <div className="title-1">Som de altíssima qualidade</div>
          <div className="title-2">
            <IonIcon icon={volumeHigh} />
            MP3
          </div>
        </div>
      </section>

      <section className="section-reactive" id="section-reactive">
        <div className="box-wrapper">
          <div className="title-1">Reativo</div>
          <div className="title-2">
            Alterne entre vários temas, dependendo da playlist que está sendo
            tocada
          </div>
        </div>
      </section>

      <footer className="rodape">
        <div className="box-wrapper">
          <div className="name-service">Purchaseway Music</div>
          <div className="copyright">Todos os direitos reservados - 2023</div>
        </div>
      </footer>
    </>
  )
}

export default Index
