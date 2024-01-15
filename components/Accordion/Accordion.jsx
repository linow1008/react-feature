// Item 클릭떄마다 해당 id를 받아와서 해당 item 열리고,닫히게하기
// 다른 item누르면 열려있는 item 닫히게하기

import styled from "styled-components";

const Accordion = ({ children, width }) => {
    return <AccordionContainer width={width}>{children}</AccordionContainer>;
};

export default Accordion;

const AccordionContainer = styled.div`
    width: ${(props) => props.width};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: red;
`;
