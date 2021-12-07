import { Datum, TagColor } from "../../../../../shared/models";
import { BoardCardContainer, BoardCardText } from "./Styles";

// const BoardCard = () => {
// TODO: I need to add "tags", also decide whether to pass in SECTION info or use Redux directly
// The reason why i didn't pass in was because I wanted to make all the UI element stateless and let TodoPage handle all the states
const BoardCard: React.FC<Datum> = (props) => {
  return (
    <BoardCardContainer>
      {/* TODO: need to add tags */}
      {/* TODO: tmp need to style */}
      {props.tags.map((t: number) => (
        <p></p>
      ))}

      <BoardCardText>{props.title}</BoardCardText>
    </BoardCardContainer>
  );
};

export default BoardCard;
