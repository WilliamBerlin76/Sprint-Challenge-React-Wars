import React from "react";
import styled from "styled-components";

const CharacterCard = styled.div`
    background: #3CB371;
    width:23%;
    height: 130px;
    min-width: 130px;
    margin-top: 20px;
    opacity: 0.8;
    transition: 0.3s ease-in;
    border-radius: 15px;
    &:hover {
        opacity: 1;
        width: 25%;
        height: 150px;
    }
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