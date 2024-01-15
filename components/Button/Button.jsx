import React from "react";
import styled from "styled-components";

const Button = ({
    name,
    isDisabled,
    size,
    radius,
    color,
    startContent,
    endContent,
    isIconOnly,
    props,
}) => {
    return (
        <ButtonContainer className={`${props}`} size={size}>
            {name}
        </ButtonContainer>
    );
};

export default Button;

const ButtonContainer = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 30px;
    border-radius: 8px;
    background-color: #fff;
    border: 1px solid black;
    font-size: 16px;
    color: black;
`;
