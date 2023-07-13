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
  pauseCircle,
  playSkipBackCircle,
  heartOutline,
  star,
  starOutline,
  trashOutline,
  person,
  exit,
  time,
  chevronDown,
} from 'ionicons/icons'
import './home.css'
import './home-mobile.css'
import { useEffect, useRef, useState } from 'react'

console.error = (function (originalError) {
  return function (...args) {
    if (
      typeof args[0] === 'string' &&
      args[0].startsWith('Warning: Extra attributes from the server')
    ) {
      return
    }
    originalError.apply(console, args)
  }
})(console.error)

interface Music {
  id: number
  theme: string
  coverUrl: string
  title: string
  gender: string
  audioUrl: string
}

const Home = () => {
  const [musicData, setMusicData] = useState<Music[]>([])
  const [audioControllerPlayToggle, setAudioControllerPlayToggle] =
    useState(true)
  const [indexAudio, setIndexAudio] = useState(0)

  const audioGlobalRef = useRef<HTMLAudioElement | null>(null)
  const audioControllerPrevRef = useRef(null)
  const audioControllerPlayRef = useRef(null)
  const audioControllerNextRef = useRef(null)

  useEffect(() => {
    fetchData()
  }, [])

  function audioControllerPlayFunction() {
    if (audioControllerPlayToggle) {
      if (audioGlobalRef.current) {
        audioGlobalRef.current.play()
        setAudioControllerPlayToggle(false)
        // musicAnimationStatus.classList.add('run');
      }
    } else {
      if (audioGlobalRef.current) {
        audioGlobalRef.current.pause()
        setAudioControllerPlayToggle(true)
        // musicAnimationStatus.classList.remove('run'); 
      }
    }
  }
  function audioControllerPlayFunctionNoPause() {
    if (audioGlobalRef.current) {
      audioGlobalRef.current.play()
      setAudioControllerPlayToggle(false)
      // musicAnimationStatus.classList.add('run');
    }
  }
  function audioControllerNextFunction() {
    if (indexAudio + 1 >= musicData.length) {
      setIndexAudio(0)
    } else {
      setIndexAudio(indexAudio + 1)
    }

    // let selectedTheme = musicDataShuffled[indexAudio].theme
    // indexAudioId = musicDataShuffled[indexAudio]._id;
    // indexAudioGender = musicDataShuffled[indexAudio].gender;

    allSongValueSetters()
    audioControllerPlayFunctionNoPause()
    // setMusicPlayTag();
    // manageHistoric();
    // refreshFavorite();
    // themeChanger(selectedTheme);
  }
  function audioControllerPrevFunction() {
    if (indexAudio - 1 < 0) {
      setIndexAudio(musicData.length - 1)
    } else {
      setIndexAudio(indexAudio - 1)
    }

    // let selectedTheme = musicDataShuffled[indexAudio].theme
    // indexAudioId = musicDataShuffled[indexAudio]._id;
    // indexAudioGender = musicDataShuffled[indexAudio].gender;

    // allSongValueSetters();
    audioControllerPlayFunctionNoPause()
    // setMusicPlayTag();
    // manageHistoric();
    // refreshFavorite();
    // themeChanger(selectedTheme);
  }

  function allSongValueSetters() {
    if (audioGlobalRef.current) {
      // audioGlobalRef.current.src = musicData[indexAudio].audioUrl;
    }
    // indexAudioId = musicDataShuffled[indexAudio]._id;
    // indexAudioGender = musicDataShuffled[indexAudio].gender;
    // coverCurrentMusic.src = musicDataShuffled[indexAudio].coverUrl;
    // containerFrameVideo.style.display = "none"
    // currentCover.style.display = "block"
    // currentCover.src = musicDataShuffled[indexAudio].coverUrl;
    // backgroundCover.style.setProperty("background-image", `url("${musicDataShuffled[indexAudio].coverUrl}")`);
    // titleCurrentMusic.innerHTML = musicDataShuffled[indexAudio].title;
    // genderCurrentMusic.innerHTML = musicDataShuffled[indexAudio].gender;
    // containerFrameVideo.innerHTML = "";
  }

  const fetchData = async () => {
    try {
      const response = await fetch('/api/music')
      const jsonData = await response.json()
      setMusicData(jsonData)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    if (musicData.length > 0) {
      const currentTrack = musicData[indexAudio]
      if (audioGlobalRef.current) {
        audioGlobalRef.current.src = currentTrack.audioUrl
        audioControllerPlayFunctionNoPause()
      }
    }
  }, [indexAudio, musicData])

  return (
    <>
      <audio ref={audioGlobalRef}></audio>
      <main className="super-main">
        <section className="main-playlist">
          <div className="box-wrapper-info">
            <div className="title-playlist">Recentes</div>
            <div className="more-playlist">Mais</div>
          </div>

          <div className="container-playlist">
            {musicData.map((music) => (
              <div
                className="item-playlist"
                data-id={music.id}
                data-theme={music.theme}
                key={music.id}
              >
                <div className="box-wrapper">
                  <div className="cover-item">
                    <img src={music.coverUrl} alt="Cover" />
                  </div>
                  <div className="info-item">
                    <div className="title-info">{music.title}</div>
                    <div className="gender-info">{music.gender}</div>
                  </div>
                </div>

                <div className="play-button-item">
                  <IonIcon icon={playCircle} />
                </div>
              </div>
            ))}
          </div>
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
                ref={audioControllerPrevRef}
                style={{ marginRight: '10px' }}
                onClick={audioControllerPrevFunction}
              />
              <IonIcon
                icon={audioControllerPlayToggle ? playCircle : pauseCircle}
                ref={audioControllerPlayRef}
                style={{ marginRight: '10px' }}
                onClick={audioControllerPlayFunction}
              />
              <IonIcon
                icon={playSkipForwardCircle}
                ref={audioControllerNextRef}
                onClick={audioControllerNextFunction}
              />
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

      <main className="super-main-mobile" style={{ display: 'none' }}>
        <section className="header-mobile">
          <div className="service-logo-mobile">
            <img src="https://pw-music-database.kevinsouza456.repl.co/pw-music-logo.png" />
          </div>

          <div className="box-wrapper-header-mobile">
            <div className="search-icon-mobile">
              <IonIcon icon={search} />
            </div>
            <div className="user-settings">
              <IonIcon icon={person} />
            </div>
          </div>
        </section>

        <section className="main-playlist-mobile">
          <div className="box-wrapper-info-mobile">
            <div className="title-playlist-mobile">Recentes</div>
            <div className="more-playlist-mobile">Mais</div>
          </div>

          <div className="container-playlist-mobile"></div>
        </section>

        <section className="main-controls-mobile">
          <div className="display-music-duration-mobile"></div>

          <div className="box-wrapper">
            <div className="cover-item">
              <img src="https://pw-music-database.kevinsouza456.repl.co/Nightcore%20-%20Numb%20(Lyrics).jpg" />
            </div>
            <div className="info-item">
              <div className="title-info">Título</div>
              <div className="gender-info">Nightcore</div>
            </div>
          </div>

          <div className="play-button-item">
            <IonIcon icon={playCircle} />
          </div>
        </section>

        <section className="main-display-mobile" style={{ display: 'none' }}>
          <div className="background-cover-mobile"></div>
          <div className="background-layer-1-mobile"></div>
          <div className="background-layer-2-mobile"></div>

          <div className="display-back">
            <IonIcon icon={chevronDown} />
          </div>

          <div className="current-cover-mobile">
            <img src="https://img.youtube.com/vi/D2QvK-7PO5g/maxresdefault.jpg" />

            <div className="container-frame-mobile"></div>
          </div>

          <div className="info-current-music-mobile">
            <div className="title-info-current-music-mobile">Título</div>
            <div className="gender-info-current-music-mobile">Nightcore</div>
          </div>

          <div className="current-music-favorite-mobile">
            <IonIcon icon={heartOutline} />
          </div>

          <div className="container-controls-mobile">
            <IonIcon
              icon={playSkipBackCircle}
              style={{ marginRight: '5px' }}
              id="audio-prev-mobile"
            />
            <IonIcon
              icon={playCircle}
              style={{ marginRight: '5px' }}
              id="audio-play-mobile"
            />
            <IonIcon
              icon={playSkipForwardCircle}
              style={{ marginRight: '5px' }}
              id="audio-next-mobile"
            />
          </div>

          <div className="current-duration-mobile">0:00</div>
          <div className="slider-music-duration-mobile">
            <div className="slider-music-duration-wrapper-mobile">
              <input type="range" min="0" max="100" value="0" />
              <div className="slider-music-duration-dot-mobile"></div>
            </div>
          </div>
          <div className="total-duration-mobile">0:00</div>

          <div className="repeat-icon-mobile">
            <IonIcon icon={repeat} />
          </div>
          <div className="shuffle-icon-mobile">
            <IonIcon icon={shuffle} />
          </div>
        </section>

        <section
          className="main-select-playlists-mobile"
          style={{ display: 'none' }}
        >
          <div className="select-playlist-back-mobile">Voltar</div>
          <div className="title-select-playlist-mobile">PlayLists</div>

          <div className="container-select-playlists-wrapper">
            <div className="container-select-playlists-mobile"></div>
          </div>
        </section>

        <section
          className="main-user-settings-mobile"
          style={{ display: 'none' }}
        >
          <div className="display-back">
            <IonIcon icon={chevronDown} />
          </div>

          <div className="logout-mobile">
            <IonIcon icon={exit} />
          </div>

          <div className="title-profile-mobile">Perfil</div>

          <div className="box-profile-mobile">
            <div className="user-settings-mobile">
              <IonIcon icon={person} />
            </div>
            <div className="box-user-information-mobile">
              <div className="user-name-mobile">Joe Dawn</div>
              <div className="registration-date-mobile">
                Registrou-se em: 15 fevereiro 2023
              </div>
            </div>
          </div>

          <div className="content-profile-mobile">
            <div
              className="title-2-profile-mobile"
              style={{ paddingLeft: '5px' }}
            >
              Músicas Favoritas
            </div>
            <div className="container-favorite-mobile"></div>

            <div className="title-2-wrapper-mobile">
              <div className="title-2-profile-mobile">Histórico</div>
              <div className="trash-icon-mobile">
                <IonIcon icon={trashOutline} />
              </div>
            </div>

            <div className="container-historic-mobile"></div>
          </div>
        </section>

        <section className="main-search-mobile" style={{ display: 'none' }}>
          <div className="display-back">
            <IonIcon icon={chevronDown} />
          </div>

          <div className="title">Resultados da Pesquisa</div>

          <div className="search-bar-mobile">
            <input
              id="search-bar-input-mobile"
              type="text"
              placeholder="Digite o nome da música..."
            />
            <div className="search-bar-close-mobile">
              <IonIcon icon={close} />
            </div>
          </div>

          <div className="content-search-mobile">
            <div className="container-search-mobile"></div>

            <div className="song-not-found-mobile" style={{ display: 'none' }}>
              Nenhuma música foi encontrada
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
