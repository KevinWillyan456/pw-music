import { IonIcon } from '@ionic/react'
import { playCircle } from 'ionicons/icons'
import { IMusic } from '../page'
import { Dispatch, SetStateAction } from 'react'

const Music = ({
  music,
  musicIndex,
  setIndexAudio,
}: {
  music: IMusic
  musicIndex: number
  setIndexAudio: Dispatch<SetStateAction<number>>
}) => {
  return (
    <div
      className="item-playlist"
      data-id={music.id}
      data-theme={music.theme}
      key={music.id}
      onClick={() => setIndexAudio(musicIndex)}
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
  )
}

export default Music
