import React from 'react';
import Tilt from 'react-parallax-tilt';


function Cards({image,title,content}) {
  return (
    <Tilt
      className="tilt"
      tiltMaxAngleX={25}
      tiltMaxAngleY={25}
      scale={1.05}
      transitionSpeed={2000}
    >
      <div className="tilt-inner w-64 h-100 mx-auto bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg overflow-hidden">
        <img className="w-full h-40 object-cover" src={image ||"src/assets/pexels-pixabay-414860.jpg"} alt={title} />
        <div className="relative p-4 h-60">
          <h3 className="text-[#fecea8] text-opacity-70">{title}</h3>
          <div className="absolute flex justify-center bottom-8 right-0 left-0 mx-auto text-white bg-opacity-50 z-10">
            <a href={content} className=" relative z-20 border-solid border-[#fecea8] border-2 divide-red-500 rounded-full p-2 w-50 text-center bg-[#fecea8] text-[#45171d] hover:bg-opacity-[0.5] text-bold">Read More</a>  
          </div>
        </div>
      </div>
    </Tilt>
  );
}

export default Cards;
