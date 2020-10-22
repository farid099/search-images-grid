import React, { useState,useEffect,useRef } from 'react'

export default function ImageCard(props) {

    const [spans,setSpan] = useState(0);
    const imageRef = useRef();

    useEffect(() => {
        imageRef.current.addEventListener('load', setSpans);
    }, [])

    const setSpans = () => {
        const height = imageRef.current.clientHeight;
    
        const spans = Math.ceil(height / 10);
    
        setSpan(spans);
      };
      const { description, urls } = props.image;

    return (
        <div style={{ gridRowEnd: `span ${spans}` }}>
        <img ref={imageRef} alt={description} src={urls.regular} />
      </div>
    )
}
