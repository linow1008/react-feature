// 활성화,비활성화 상태마다 열리고 닫힘
// 열리면 text가 보이고, 닫히면 text가 안보임
// 내려가는 애니메이션,올라가는 애니메이션

import { useState } from "react";
import styled from "styled-components";

const AccordionItem = ({ title, text, icon, key }) => {
    const [active, setActive] = useState(false);

    const activeClick = () => {
        setActive(!active);
    };

    return (
        <AccordionItemContainer>
            <Header key={key} onClick={activeClick}>
                <Title>{title}</Title>
                <TitleIcon>{icon}</TitleIcon>
            </Header>
            {/* contents */}
            <ActiveContents active={active}>{text}</ActiveContents>
        </AccordionItemContainer>
    );
};

export default AccordionItem;

const AccordionItemContainer = styled.div`
    background-color: blue;
    width: 100%;
    padding: 10px 20px;
`;
const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Title = styled.div``;
const TitleIcon = styled.div``;
const ActiveContents = styled.div`
    width: 100%;
    height: 0;
    display: ${(props) => (props.active ? "block" : "none")};
    transition: height 2s ease-in-out;
    @keyframes open {
        0% {
            height: 0;
        }
        100% {
            height: 100%;
        }
    }
    @keyframes close {
        0% {
            height: 0;
        }
        100% {
            height: 100%;
        }
    }
`;
