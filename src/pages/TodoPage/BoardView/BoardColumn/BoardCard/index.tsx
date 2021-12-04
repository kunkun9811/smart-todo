import { Datum } from "../../../../../shared/models";
import { BoardCardContainer, BoardCardText } from "./Styles";

// const BoardCard = () => {
const BoardCard: React.FC<Datum> = (props) => {
  return (
    <BoardCardContainer>
      {/* TODO: need to add tags */}
      {/* TODO: need to change this to title */}
      <BoardCardText>{props.description}</BoardCardText>
    </BoardCardContainer>
  );
};

export default BoardCard;
