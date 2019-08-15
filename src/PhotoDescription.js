import React from "react";
import styled from "styled-components";

const TextDiv = styled.div`
    background-color: #4d5566;
    font-size: 0.8em;
    padding: 10px 20px;
    text-align: justify;
`;

const PhotoDescription = props => {
    return(
        <TextDiv>
            <p>{props.text}</p>
        </TextDiv>

    );
}

export default PhotoDescription;