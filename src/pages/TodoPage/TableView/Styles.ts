import styled, { css } from "styled-components";

const CellPadding = css`
  padding: 12px 15px;
`;

export const Table = styled.table`
  border-collapse: collapse;
  margin: 25px 0; // NOTE: not sure why this isn't doing anything
  font-size: 0.9em;
  /* min-width: 400px; */
  height: 100%;
  width: 100%;
  overflow: scroll;
`;

export const THead = styled.thead``;

export const Tr = styled.tr`
  background-color: #009879;
  color: #ffffff;
  text-align: left;
  font-weight: bold;
`;

export const Th = styled.th`
  ${CellPadding}
`;

export const Td = styled.td`
  ${CellPadding}
`;
