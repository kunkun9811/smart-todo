import React, { useEffect, useState } from "react";
import { DataArray, Datum } from "../../../shared/models";
import { BoardViewMainContainer, BoardViewContentContainer } from "./Styles";
import BoardColumn from "./BoardColumn";

/* local models/interfaces */
interface ProcessedTodos {
  [index: number]: DataArray["data"];
}

interface BoardViewStates {
  isReady: boolean;
  processedTodos: ProcessedTodos;
  groups: number[];
}

const initialState: BoardViewStates = {
  isReady: false,
  processedTodos: {},
  groups: [],
};

// TODO: [10/1/2021] Going to implement my own Kandan's View by using classes
const BoardView: React.FC<DataArray> = ({ data }) => {
  const [isReady, setIsReady] = useState<BoardViewStates["isReady"]>(initialState.isReady);
  const [groups, setGroups] = useState<BoardViewStates["groups"]>(initialState.groups);
  const [processedTodos, setProcessedTodos] = useState<BoardViewStates["processedTodos"]>(initialState.processedTodos);

  /* TODO: NOTE: [12/2/2021] could I optimize this? */
  // on load, group todos based on their groupId
  useEffect(() => {
    const allGroups: BoardViewStates["groups"] = getAllGroups(data);

    // set all existing groups
    setGroups(allGroups);
    // mark content ready to display
    setIsReady(true);
  }, [data]);

  /* methods */
  const getAllGroups = (data: DataArray["data"]): BoardViewStates["groups"] => {
    const allGroups: Set<number> = new Set<number>();
    data.forEach((d: Datum) => {
      allGroups.add(d["groupId"]);
    });

    return Array.from(allGroups);
  };

  return (
    <BoardViewMainContainer>
      {/* NOTE: Official code */}
      <BoardViewContentContainer>
        {/* for each group, render the boardColumn with corresponding boardcards */}
        {groups.map((groupId: number) => {
          const group: DataArray["data"] = data.filter((d: Datum) => d["groupId"] === groupId);
          return <BoardColumn data={group} key={groupId} />;
        })}
      </BoardViewContentContainer>
    </BoardViewMainContainer>
  );
};

export default BoardView;
