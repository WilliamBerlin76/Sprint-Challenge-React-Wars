import React from "react";
import styled from "styled-components";

const PersonCard = props => {
    return(
        <div className="character-card" key={props.id}>
            <h2 className="char-name" key={props.name}>{props.name}</h2>
            <p className="height" key={props.height}>Height: {props.height}</p>
            <p className="weight" key={props.mass}>Weight: {props.mass}</p>
        </div>
    )
}

export default PersonCard