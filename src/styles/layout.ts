import styled, { css } from "styled-components";

export const row = css`
  display: flex;
  align-items: center;
`;
export const column = css`
  display: flex;
  flex-direction: column;
`;
export const Row = styled.div`
  ${row};
`;
export const Column = styled.div`
  ${column}
`;
