import styled from "styled-components/macro";
import { makeStyles } from "@mui/styles";

export const BoardColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 90%;
  width: 15%;
  min-width: 150px;
  margin: 0 10px;
  border-radius: 5px;

  /* background-color: grey; */
`;

export const BoardColumnInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5%;
  width: 100%;

  /* background-color: green; */
`;

export const BoardColumnInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  height: 100%;
  width: 95%;
  min-height: 30px;
  min-width: 150px;
`;

export const BoardColumnGroupNameContainer = styled.div`
  grid-column: 1/8;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;

  /* background-color: red; */
`;

export const BoardColumnGroupNameWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1px 1px;
  border-radius: 5px;

  background-color: skyblue;
`;

export const BoardColumnGroupNameText = styled.p`
  margin: 0;
  font-size: 0.7rem;
  color: black;
`;

export const BoardColumnMoreButtonWrapper = styled.div`
  /* grid */
  grid-column: 8/9;
  justify-self: flex-end;
  align-self: center;

  /* flexbox */
  display: flex;
  justify-content: center;
  align-items: center;

  /* background-color: lightblue; */
`;

export const BoardColumnAddButtonWrapper = styled.div`
  /* grid */
  grid-column: 9/10;
  justify-self: flex-end;
  align-self: center;

  /* flexbox */
  display: flex;
  justify-content: center;
  align-items: center;

  /* background-color: lightpink; */
`;

export const BoardColumnCardContainer = styled.div`
  height: 5%;
  width: 95%;
  min-height: 30px;
  min-width: 150px;
  margin: 5px 0;
  background-color: white;
  border: 1px solid black;
  border-radius: 7px;
`;

/* material UI themes */
export const useStyles = makeStyles({
  columnButton: {
    height: "15px !important",
    width: "15px !important",
  },
});
