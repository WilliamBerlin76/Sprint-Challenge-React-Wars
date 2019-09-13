import React from "react";
import styled from "styled-components";

const CharacterCard = styled.div`
    background: #3CB371;
    width:23%;
    margin-top: 20px;
`;
const CharName = styled.h2`
    background: #2E8B57;
`;
const PersonCard = props => {
    return(
        <CharacterCard key={props.id}>
            <CharName key={props.name}>{props.name}</CharName>
            <p className="height" key={props.height}>Height: {props.height}</p>
            <p className="weight" key={props.mass}>Weight: {props.mass}</p>
        </CharacterCard>
    )
}

export default PersonCard