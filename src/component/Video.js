import React from 'react'

const Video = ({src , image}) => {
  return (
    <div className='vid'>
      {image ? <img className='regulier-img' src={'images/' + image} alt={image}/> : <iframe src={"https://player.vimeo.com/video/" + src} className='video'  frameBorder="0" title='video1' allow="autoplay; fullscreen" allowFullScreen></iframe>}
    </div>
  )
}

export default Video
