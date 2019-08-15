import React from "react";
import PhotoDescription from "./PhotoDescription";
import styled from "styled-components";

const CardDiv = styled.div`
    max-width: 1000px; 
    padding: 0 50px;
`;

const PhotoCard = props => {
    return (
        <CardDiv>
            <img src={props.photoURL} alt={`Photo: "${props.photoTitle}"`} />
            <a href={props.photoBigURL} target="_blank" classBane="App-link">Open full-sized image (new window/tab)</a>
            <PhotoDescription key={props.key} text={props.photoDesc}/>
        </CardDiv>
    );
}

export default PhotoCard;