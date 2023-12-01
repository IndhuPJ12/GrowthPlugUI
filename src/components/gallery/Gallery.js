import React,{useEffect,useState} from 'react'
import FisrtImage from '../../assets/gallery1.jpeg'
import "./Gallery.css"

const Gallery = ({images}) =>{

    const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 5) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className='gallery-container' >
      {images.slice(startIndex, startIndex + 5).map((image, index) => (
        <img key={index} src={image}  className='gallery-image' />
      ))}
    </div>
  );
    
}
export default Gallery