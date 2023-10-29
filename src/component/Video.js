import React from 'react'

const Video = ({src , image, newclass}) => {
  return (
    <div className={`vid ${newclass && 'vid-center'}`}>
      {image ? <img className={`regulier-img ${newclass}`} src={'images/' + image} alt={image}/> : <iframe src={"https://player.vimeo.com/video/" + src} className='video'  frameBorder="0" title='video1' allow="autoplay; fullscreen" allowFullScreen></iframe>}
    </div>
  )
}

export default Video
