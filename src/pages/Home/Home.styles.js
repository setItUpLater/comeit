import { HEADER_HEIGHT } from "components/Header/Header.constants";
import { styled } from "styled-components";
import { size } from "styles/mixins";

export const Container = styled.div`
  display: flex;

  ${size({ width: "100vw", height: `calc(100vh - ${HEADER_HEIGHT}px)` })}
`;

export const Sidebar = styled.div`
  width: 300px;
`;