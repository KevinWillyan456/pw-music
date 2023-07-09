'use client'

import { IonIcon } from '@ionic/react'
import {
  search,
  close,
  shuffle,
  repeat,
  volumeHigh,
  playSkipForwardCircle,
  playCircle,
  playSkipBackCircle,
  heartOutline,
  star,
  starOutline,
  trashOutline,
  person,
  exit,
  time,
} from 'ionicons/icons'
import './home.css'

const Home = () => {
  return (
    <>
      <main className="super-main">
        <section className="main-playlist">
          <div className="box-wrapper-info">
            <div className="title-playlist">Recentes</div>
            <div className="more-playlist">Mais</div>
          </div>

          <div className="container-playlist"></div>
        </section>

        <section className="main-display">
          <div className="background-cover"></div>

          <div className="container-search">
            <div className="search-icon">
              <IonIcon icon={search} />
            </div>
            <div className="search-bar" style={{ display: 'none' }}>
              <input
                id="search-bar-input"
                type="text"
                placeholder="Digite o nome da música..."
              />
              <div className="search-bar-close">
                <IonIcon icon={close} />
              </div>
            </div>
          </div>

          <div className="current-cover">
            <div className="ghost-frame"></div>
            <img src="https://pw-music-database.kevinsouza456.repl.co/Nightcore%20-%20Numb%20(Lyrics).jpg" />

            <div className="container-frame"></div>
          </div>

          <div className="container-settings">
            <div className="clock-settings" style={{ display: 'none' }}>
              <IonIcon icon={time} />
            </div>
            <div className="user-settings">
              <IonIcon icon={person} />
            </div>
          </div>

          <div className="container-search-result" style={{ display: 'none' }}>
            <div className="layer-search-result">
              <div className="box-search-result">
                <div className="title-search-result">
                  Resultados da Pesquisa
                </div>
                <div className="container-items"></div>
              </div>
            </div>

            <div className="song-not-found" style={{ display: 'none' }}>
              Nenhuma música foi encontrada
            </div>
          </div>

          <div className="container-user-settings" style={{ display: 'none' }}>
            <div className="layer-user-settings">
              <div className="box-user-settings">
                <div className="title-profile">Perfil</div>
                <div className="logout">
                  <IonIcon icon={exit} />
                </div>
                <div className="box-profile">
                  <div className="user-settings">
                    <IonIcon icon={person} />
                  </div>
                  <div className="box-user-information">
                    <div className="user-name">Joe Dawn</div>
                    <div className="registration-date">
                      Registrou-se em: 15 fevereiro 2023
                    </div>
                  </div>
                </div>

                <div className="title-profile">Músicas Favoritas</div>

                <div className="container-favorite"></div>

                <div className="title-wrapper">
                  <div className="title-profile">Histórico</div>
                  <div className="trash-icon">
                    <IonIcon icon={trashOutline} />
                  </div>
                </div>

                <div className="container-historic"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="main-controls">
          <div className="container-side-1">
            <div className="music-animation-status">
              <div style={{ marginRight: '5px' }}></div>
              <div style={{ marginRight: '5px' }}></div>
              <div></div>
            </div>
            <div className="cover-current-music">
              <img src="https://pw-music-database.kevinsouza456.repl.co/Nightcore%20-%20Numb%20(Lyrics).jpg" />
            </div>
            <div className="info-current-music">
              <div className="title-info-current-music">Título</div>
              <div className="gender-info-current-music">Nightcore</div>

              <div className="current-music-rating">
                <IonIcon icon={star} style={{ marginRight: '2px' }} />
                <IonIcon icon={star} style={{ marginRight: '2px' }} />
                <IonIcon icon={star} style={{ marginRight: '2px' }} />
                <IonIcon icon={star} style={{ marginRight: '2px' }} />
                <IonIcon icon={starOutline} />
              </div>
            </div>

            <div className="current-music-favorite">
              <IonIcon icon={heartOutline} />
            </div>
          </div>

          <div className="container-side-2">
            <div className="container-controls">
              <IonIcon
                icon={playSkipBackCircle}
                id="audio-prev"
                style={{ marginRight: '10px' }}
              />
              <IonIcon
                icon={playCircle}
                id="audio-play"
                style={{ marginRight: '10px' }}
              />
              <IonIcon icon={playSkipForwardCircle} id="audio-next" />
            </div>

            <div className="container-duration-status">
              <div className="current-duration">0:00</div>
              <div className="slider-music-duration">
                <div className="slider-music-duration-wrapper">
                  <input type="range" min="0" max="100" value="0" />
                  <div className="slider-music-duration-dot"></div>
                </div>
              </div>
              <div className="total-duration">0:00</div>
            </div>

            <div className="container-volume">
              <div className="volume-icon">
                <IonIcon icon={volumeHigh} />
              </div>
              <div className="slider-music-volume">
                <div className="slider-music-volume-wrapper">
                  <input type="range" min="0" max="100" value="60" />
                  <div className="slider-music-volume-dot"></div>
                </div>
              </div>
            </div>

            <div className="container-funcions">
              <div className="repeat-icon">
                <IonIcon icon={repeat} />
              </div>
              <div className="shuffle-icon">
                <IonIcon icon={shuffle} />
              </div>
            </div>

            <div className="service-logo">
              <img src="https://pw-music-database.kevinsouza456.repl.co/pw-music-logo.png" />
            </div>
          </div>
        </section>

        <div className="focus-shadow" style={{ display: 'none' }}></div>

        <section className="main-select-playlists" style={{ display: 'none' }}>
          <div className="select-playlist-back">Voltar</div>
          <div className="title-select-playlist">PlayLists</div>

          <div className="container-select-playlists"></div>
        </section>
      </main>
    </>
  )
}

export default Home
