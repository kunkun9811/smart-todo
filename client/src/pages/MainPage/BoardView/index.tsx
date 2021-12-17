import React, { useEffect, useState } from "react";
import { TodoArray, Todo, Section, User, Group } from "../../../shared/models";
import { BoardViewMainContainer, BoardViewContentContainer } from "./Styles";
import BoardColumn from "./BoardColumn";

// redux imports
import { useSelector } from "react-redux";
import { State } from "../../../state";

/* local models/interfaces */
interface ProcessedTodos {
  [index: number]: TodoArray["data"];
}

interface BoardViewStates {
  isReady: boolean;
  processedTodos: ProcessedTodos;
  groups: number[];
  section: Section | undefined;
}

const initialState: BoardViewStates = {
  isReady: false,
  processedTodos: {},
  groups: [],
  section: undefined,
};

const BoardView: React.FC<TodoArray> = ({ data }) => {
  const [isReady, setIsReady] = useState<BoardViewStates["isReady"]>(initialState.isReady);
  // const [groups, setGroups] = useState<BoardViewStates["groups"]>(initialState.groups);
  const [currentSection, setCurrentSection] = useState(initialState.section);
  const [processedTodos, setProcessedTodos] = useState<BoardViewStates["processedTodos"]>(initialState.processedTodos);

  // redux states
  const user: User = useSelector((state: State) => state.user);
  const sections: Section[] = useSelector((state: State) => state.sections);

  // /* TODO: NOTE: [12/2/2021] could I optimize this? */
  // // on load, group todos based on their groupId
  // useEffect(() => {
  //   const allGroups: BoardViewStates["groups"] = getAllGroups(data);

  //   // set all existing groups
  //   setGroups(allGroups);
  //   // mark content ready to display
  //   // setIsReady(true);
  // }, [data]);

  // /* methods */
  // // TODO: I don't think I need this anymore. Because the new 'groups' property is already an array
  // // and the id problem is resolved by actually assigning a groupId to each group in the database
  // const getAllGroups = (data: TodoArray["data"]): BoardViewStates["groups"] => {
  //   const allGroups: Set<number> = new Set<number>();
  //   data.forEach((d: Todo) => {
  //     allGroups.add(d["groupId"]);
  //   });

  //   return Array.from(allGroups);
  // };

  useEffect(() => {
    console.log("______sections_____");
    console.log(sections);

    const curSec: Section | undefined = sections.find((s: Section) => s._id === user.currentSectionId);
    // TODO: [12/16/2021] maybe additional handling
    if (!curSec) return;
    setCurrentSection(curSec);
  }, [user, sections]);

  return (
    <BoardViewMainContainer>
      {/* NOTE: Official code */}
      <BoardViewContentContainer>
        {/* for each group, render the boardColumn with corresponding boardcards */}
        {/* TODO: I will just loop over section's new "groups" property and each of their id to filter which todo to pass in*/}
        {/* TODO: Also pass in the group */}
        {currentSection ? (
          currentSection.groups.map((g: Group) => {
            const todosInCurGroup: TodoArray["data"] = data.filter((d: Todo) => d["groupId"] === g.id);
            return <BoardColumn data={todosInCurGroup} group={g} key={g.id} />;
          })
        ) : (
          <div>No Groups</div>
        )}
      </BoardViewContentContainer>
    </BoardViewMainContainer>
  );
};

export default BoardView;
