import { css, styled } from "styled-components";
import { flex, position } from "styles/mixins";
import { hexToRgba } from "styles/utils";

export const DialogBody = styled.div`
  ${flex.center({ gap: 50, direction: "column" })}
  ${position.posCenter()}
  ${({ theme }) =>
    css`
      background-color: ${theme.colors.white};
    `}
  border-radius: 8px;
  padding: 12px;
  width: 400px;
`;

export const DialogBackground = styled.div`
  ${position.fixed({ top: 0, left: 0 })}
  ${({ theme }) =>
    css`
      background-color: ${hexToRgba(theme.colors.black, 0.3)};
    `}
  width: 100%;
  height: 100%;
  z-index: 9999;
`;
