import React from "react";
import ImageCard from "./ImageCard";

export default function ImageList({ images }) {

const listImages = images.map((image) => { 
    return <ImageCard image={image} key={image.id}/>
});

return <div className="image-list container">{listImages}</div>;
}
