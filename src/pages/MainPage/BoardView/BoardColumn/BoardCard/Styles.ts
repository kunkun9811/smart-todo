import styled from "styled-components/macro";

/* local interfaces */
interface ITagProps {
  backgroundColor?: string;
}

export const BoardCardContainer = styled.div`
  height: 5%;
  width: 95%;
  min-height: 30px;
  min-width: 150px;
  margin: 5px 0;
  background-color: white;
  border: 1px solid black;
  border-radius: 7px;
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
  background-color: ${({ backgroundColor }: ITagProps) => (backgroundColor ? backgroundColor : "grey")};
  color: white;
`;

export const BoardCardText = styled.p`
  width: 90%;
  overflow: hidden;
  margin: 10px;
`;
