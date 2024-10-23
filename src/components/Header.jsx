import styled from "styled-components";
import {flex, font} from "../styled";

const HeaderContainer = styled.header`
    padding: 20px 20px;
    background-color: black;
    ${flex(undefined, "space-between", "center", undefined, undefined)}
`;
const MenuContainer = styled.ul`
    padding: 20px 20px;
    background-color: black;
    ${flex(undefined, "center", "center", "20px", undefined)}
    li {
        list-style: none;
        ${font("16px")}
    }
`;

export default function Header() {
    return (
        <HeaderContainer>
            <h1>OZ코딩스쿨</h1>
            <MenuContainer>
                <li>로그인</li>
                <li>회원가입</li>
                <li>내클래스</li>
            </MenuContainer>
        </HeaderContainer>
    );
}
