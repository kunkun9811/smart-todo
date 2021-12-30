import styled from "styled-components/macro";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

/* local interfaces */
interface ITagProps {
  backgroundColor: string;
}

export const BoardCardContainer = styled.div`
  min-height: 80px;
  width: 100%;
  margin: 5px 0;
  background-color: white;
  border: ${(props) => `1px solid ${props.theme.palette.colors.main.borderColor}`};
  border-radius: 7px;
`;

export const BoardCardContentContainer = styled.div`
  height: 100%;
  width: 90%;
`;

export const BoardCardOptionsContainer = styled.div`
  height: 100%;
  width: 10%;
`;

export const BoardCardTagsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 50px);
  grid-template-rows: 20px;
  grid-gap: 5px 10px;
  width: 90%;
  padding: 10px;
  overflow: auto;
`;

export const Tag = styled.div<ITagProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : "grey")};
  color: white;
`;

export const BoardCardText = styled.p`
  width: 90%;
  overflow: hidden;
  margin: 10px;
`;
