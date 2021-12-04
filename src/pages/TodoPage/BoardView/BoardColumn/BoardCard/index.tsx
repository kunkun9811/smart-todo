import { Datum } from "../../../../../shared/models";
import { BoardCardContainer, BoardCardText } from "./Styles";

// const BoardCard = () => {
const BoardCard: React.FC<Datum> = (props) => {
  return (
    <BoardCardContainer>
      {/* TODO: need to add tags */}

      <BoardCardText>{props.title}</BoardCardText>
    </BoardCardContainer>
  );
};

export default BoardCard;
