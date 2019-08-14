import React from "react";
import PhotoDescription from "./PhotoDescription";

const PhotoCard = props => {
    return (
        <div className="App-photo-div">
            <img src={props.photoURL} alt={`Photo: "${props.photoTitle}"`} />
            <a href={props.photoBigURL} target="_blank" class="App-link">Open full-sized image (new window/tab)</a>
            <PhotoDescription key={props.key} text={props.photoDesc}/>
        </div>
    );
}

export default PhotoCard;