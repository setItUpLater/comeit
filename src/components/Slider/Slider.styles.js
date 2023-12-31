import { css, styled } from "styled-components";
import { flex, typography } from "styles/mixins";
import { hexToRgba } from "styles/utils";

export const SlideItem = styled.div`
  ${props => css`
    width: ${props.contentWidth}px;

    cursor: pointer;
  `}
`;

export const Img = styled.img`
  ${props => css`
    width: ${props.contentWidth}px;

    border-radius: 15px;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.6;
    }
  `}
`;

export const SliderContainer = styled.div`
  display: flex;

  ${props => css`
    width: ${props.sliceWidth}px;

    gap: ${props.space}px;
  `}
  position: relative;
`;

export const Container = styled.div`
  width: ${({ contentWidth, space, showContentNum }) =>
    `calc(${((contentWidth * showContentNum) / 100) * (100 + space * (showContentNum - 1))}%)`};
  overflow: hidden;
  position: relative;
`;

export const ContainerBlock = styled.div`
  ${flex.center()}
`;

export const Button = styled.button`
  ${({ theme, position }) => css`
    position: absolute;
    top: 30%;
    ${position}: 10px;

    width: 22px;
    height: 22px;
    border: none;
    padding: 20px 0;
    background-color: ${hexToRgba(theme.colors.gray3, 0.3)};
    border-radius: 5px;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: ${theme.palettes.blue.base};
    }

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `}
`;

export const CardContents = styled.div`
  ${flex.column({ justify: "center" })}
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  padding: 10px 20px;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(3px);
  opacity: 0;
  transition: all 0.3s ease-in-out;

  line-height: 35px;

  &:hover {
    opacity: 1;
  }
`;

export const ImgBox = styled.div`
  ${props => css`
    position: relative;
    width: ${props.contentWidth}px;

    cursor: pointer;
    overflow: hidden;
    height: 200px;
    border-radius: 15px;
  `}
`;

export const IntroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  transition: opacity 0.3s;
  position: relative;

  &:hover {
    opacity: 0.6;
  }
`;

export const ThemeText = styled.p`
  ${typography("paragraph3")}
  ${({ theme }) => css`
    color: ${theme.palettes.blue.base};
    line-height: 35px;
  `}
`;

export const AdressText = styled.p`
  ${typography("paragraph3")}
`;

export const NameText = styled.p`
  ${typography("heading3")}
  font-weight: bold;
`;
