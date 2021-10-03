import styled from "styled-components/macro";
import { makeStyles } from "@mui/styles";

/* styled components */
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
  width: 100%;

  /* background-color: teal; */
`;

export const BoardViewContentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 95%;
  width: 95%;

  /* background-color: pink; */
`;

export const BoardViewColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 90%;
  width: 15%;
  margin: 0 10px;
  border-radius: 5px;

  /* background-color: grey; */
`;

export const BoardViewColumnInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5%;
  width: 100%;

  /* background-color: green; */
`;

export const BoardViedwColumnInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  height: 100%;
  width: 95%;
  min-height: 30px;
  min-width: 150px;
`;

export const BoardViewGroupNameContainer = styled.div`
  grid-column: 1/8;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;

  /* background-color: red; */
`;

export const BoardViewGroupNameWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1px 1px;
  border-radius: 5px;

  background-color: skyblue;
`;

export const BoardViewGroupNameText = styled.p`
  margin: 0;
  font-size: 0.7rem;
  color: black;
`;

export const BoardViewMoreButtonWrapper = styled.div`
  grid-column: 8/9;
  justify-self: center;
  align-self: center;

  display: flex;
  justify-content: center;
  align-items: center;

  /* background-color: lightblue; */
`;

export const BoardViewAddButtonWrapper = styled.div`
  grid-column: 9/10;
  justify-self: center;
  align-self: center;

  display: flex;
  justify-content: center;
  align-items: center;

  /* background-color: lightpink; */
`;

export const BoardViewCardContainer = styled.div`
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
    height: "12px !important",
    width: "12px !important",
  },
});
