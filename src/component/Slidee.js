import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';


function Slidee({data}) {


  return (
    <div className='speciaal-sect'>
      <div style={{ textAlign: "center", width: "100%" }}>
        <div style={{
          padding: "0",
        }}>
        <Slider autoplay={1000} infinite={true} >
        {data.map((item, index) => (
            <div
                key={index}
                style={{ background: `url('${item.image}') no-repeat center center` }}
            >
                <div className="center"
                >
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <a key={item.index} onClick={()=>{document.getElementById(`a${item.index}`).scrollIntoView({ behavior: 'smooth', block: 'center' })}} style={{"border":"1px solid#fff","color":"#fff","padding":".6rem 2rem","textDecoration":"none","marginBottom":"1em","marginRight":"1em","whiteSpace":"nowrap","display":"inline-block","cursor":"pointer"}}>{item.button}</a>
                </div>
            </div>
        ))}
        </Slider>
        </div>
      </div>
    </div>
  );
}

export default Slidee;
