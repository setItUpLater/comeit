import { Link } from "react-router-dom";
import { css, styled } from "styled-components";
import { flex } from "styles/mixins";

export const Layout = styled.div`
  ${flex({ align: "center", direction: "column", justify: "center" })}
  margin: 0 auto;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoImg = styled.img`
  display: flex;
  width: 50px;
  height: 50px;
`;

export const Img = styled.img`
  width: 100%;
  display: flex;
  padding-top: 100px;
  padding-bottom: 50px;
`;

export const Box = styled.div`
  display: flex;
  width: 100vw;
  justify-content: flex-end;
  padding-right: 200px;
`;

export const NavigateButton = styled(Link)`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.black};
    padding: 10px;
    color: ${theme.colors.black};
    border-radius: 10px;
    &:hover {
      border: 1px solid ${theme.colors.deepblue};
      background-color: ${theme.palettes.blue.hover};
      color: ${theme.colors.white};
    }
  `}
`;

export const Item = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 100%; // 원하는 슬라이드 아이템의 너비 조절 여기서 할 수 있습니다. 이 값은 기존 코드에서 contentWidth와 같습니다.
  margin-right: 5px; // 슬라이드 아이템 사이의 여백은 여기서 조절할 수 있습니다.
`;
