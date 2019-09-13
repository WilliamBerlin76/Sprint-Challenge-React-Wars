import React from "react";
import styled from "styled-components";

const CharacterCard = styled.div`
    background: #00FA9A;
    width:25%;
`;
const PersonCard = props => {
    return(
        <CharacterCard key={props.id}>
            <h2 className="char-name" key={props.name}>{props.name}</h2>
            <p className="height" key={props.height}>Height: {props.height}</p>
            <p className="weight" key={props.mass}>Weight: {props.mass}</p>
        </CharacterCard>
    )
}

export default PersonCard