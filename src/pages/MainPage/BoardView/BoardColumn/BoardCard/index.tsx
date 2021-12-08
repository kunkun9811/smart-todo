import { Todo, Section, TagColorsKey, TagColor } from "../../../../../shared/models";
import { BoardCardContainer, BoardCardTagsContainer, Tag, BoardCardText } from "./Styles";

/* redux imports */
import { useSelector } from "react-redux";
import { State } from "../../../../../state";

// const BoardCard = () => {
// TODO: I need to add "tags"
const BoardCard: React.FC<Todo> = (cardInfo) => {
  // section info from redux
  // TODO: this is going to be different when hooking up with real database
  // I might create a "section" slice (not a "sections" slice) to hold the current active section to avoid filtering everytime
  const section: Section = useSelector((state: State) => state.sections).filter((s: Section) => s.id === cardInfo.sectionId)[0];

  return (
    <BoardCardContainer>
      {/* TODO: tmp need to style */}
      <BoardCardTagsContainer>
        {cardInfo.tags.map((t: TagColorsKey) => (
          // <p key={t}>
          //   {t} : {section.tagColors[t].color}
          // </p>
          <Tag backgroundColor={section.tagColors[t].color}>{section.tagColors[t].text}</Tag>
        ))}
      </BoardCardTagsContainer>

      <BoardCardText>{cardInfo.title}</BoardCardText>
    </BoardCardContainer>
  );
};

/* how to let them have min width and height and then wrap after they reach the end*/

export default BoardCard;
