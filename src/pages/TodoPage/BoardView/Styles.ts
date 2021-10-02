import styled from "styled-components";

export const BoardViewMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* TODO: [10/1/2021] - figure out the best way to set height and width */
  height: 800px;
  width: 1500px;
  /* height: 80%;
  width: 80%;
  min-height: 300px;
  min-width: 200px; */

  background-color: teal;
`;

export const BoardViewContentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 95%;
  width: 95%;

  background-color: pink;
`;

export const BoardViewColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 90%;
  width: 15%;
  margin: 0 10px;

  background-color: grey;
`;

export const BoardViewCardContainer = styled.div`
  height: 5%;
  width: 80%;
  min-height: 30px;
  min-width: 150px;
  margin: 5px 0;
  background-color: white;
  border: 1px solid black;
  border-radius: 7px;
`;
