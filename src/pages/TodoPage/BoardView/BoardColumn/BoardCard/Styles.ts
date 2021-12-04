import styled from "styled-components/macro";

export const BoardCardContainer = styled.div`
  height: 5%;
  width: 95%;
  min-height: 30px;
  min-width: 150px;
  max-height: 100px;
  max-width: 300px;
  margin: 5px 0;
  background-color: white;
  border: 1px solid black;
  border-radius: 7px;
`;

export const BoardCardText = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  height: 90%;
  width: 90%;
  overflow: hidden;
  /* padding: 10px; */
  margin: 10px;
`;
