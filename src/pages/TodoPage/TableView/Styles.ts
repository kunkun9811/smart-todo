import styled, { css } from "styled-components";

const CellPadding = css`
  padding: 12px 15px;
`;

export const THead = styled.thead``;

export const HeadTr = styled.tr`
  background-color: #009879;
  color: #ffffff;
  text-align: left;
  font-weight: bold;
`;

export const TBody = styled.tbody``;

export const BodyTr = styled.tr`
  &:hover {
    background-color: #f3f3f3;
  }
`;

export const Th = styled.th`
  ${CellPadding}
`;

export const Td = styled.td`
  ${CellPadding}
`;

export const Table = styled.table`
  border-collapse: collapse;
  margin: 25px 0; // NOTE: not sure why this isn't doing anything
  font-size: 0.9em;
  min-width: 400px;
  overflow: scroll;
`;
