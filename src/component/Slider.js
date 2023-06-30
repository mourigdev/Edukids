import React from 'react';
import { Carousel } from 'react-carousel-minimal';

function Slider({data}) {

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className='speciaal-sect'>
      <div style={{ textAlign: "center", width: "100%" }}>
        {/* <h2>React Carousel Minimal</h2>
        <p>Easy to use, responsive and customizable carousel component for React Projects.</p> */}
        <div style={{
          padding: "0",
        }} onLoad={()=>{

          function selectText(nodeId) {
            const node = nodeId;
        
            if (document.body.createTextRange) {
                const range = document.body.createTextRange();
                range.moveToElementText(node);
                range.select();
            } else if (window.getSelection) {
                const selection = window.getSelection();
                const range = document.createRange();
                range.selectNodeContents(node);
                selection.removeAllRanges();
                selection.addRange(range);
            }
        }

          document.querySelectorAll(".carousel-caption-bottom").forEach((el,i)=>{
            el.addEventListener("click",()=>{
              console.log(`a${i}`)
        document.getElementById(`a${i}`).scrollIntoView({ behavior: 'smooth', block: 'center' })
        selectText(document.getElementById(`a${i}`).querySelector("h4"))
            })
        })
          document.querySelectorAll(".carousel-image").forEach((el,i)=>{
            el.addEventListener("click",()=>{
              console.log(`a${i}`)
        document.getElementById(`a${i}`).scrollIntoView({ behavior: 'smooth', block: 'center' })
        selectText(document.getElementById(`a${i}`).querySelector("h4"))
            })
        })
        }}>
          <Carousel
            data={data}
            time={2000}
            width="100%"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              // maxWidth: "850px",
              // maxHeight: "500px",
              // margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Slider;
