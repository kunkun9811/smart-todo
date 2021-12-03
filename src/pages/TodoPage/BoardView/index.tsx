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
  tags: number[];
}

const initialState: BoardViewStates = {
  isReady: false,
  processedTodos: {},
  tags: [],
};

// TODO: [10/1/2021] Going to implement my own Kandan's View by using classes
const BoardView: React.FC<DataArray> = ({ data }) => {
  const [isReady, setIsReady] = useState<BoardViewStates["isReady"]>(initialState.isReady);
  const [tags, setTags] = useState<BoardViewStates["tags"]>(initialState.tags);
  const [processedTodos, setProcessedTodos] = useState<BoardViewStates["processedTodos"]>(initialState.processedTodos);

  /* TODO: NOTE: [12/2/2021] could I optimize this? */
  // on load, group todos based on their tags
  useEffect(() => {
    const allTags: BoardViewStates["tags"] = getAllTags(data);

    console.log("-------------allTags-------------");
    console.log(allTags);

    // group all todos by tags
    // const procTodos: BoardViewStates["processedTodos"] = {};
    // allTags.forEach((currentTagId: number) => {
    //   const tagGroup: DataArray["data"] = data.filter((d) => d["tagId"] === currentTagId);
    //   procTodos[currentTagId].push(...tagGroup);
    // });
    // update state - TODO: [12/2/2021] maybe we could save it to redux state so we don't have to do this repeatedly?
    // setProcessedTodos(procTodos);

    // set all existing tags
    setTags(allTags);
    // mark content ready to display
    setIsReady(true);
  }, [data]);

  /* methods */
  const getAllTags = (data: DataArray["data"]): BoardViewStates["tags"] => {
    const allTags: Set<number> = new Set<number>();
    data.forEach((value: Datum) => {
      allTags.add(value["tagId"]);
    });

    return Array.from(allTags);
  };

  // if (isReady) {
  //   return (
  //     <BoardViewMainContainer>
  //       {/* DEBUG: Mock view */}
  //       {/* <BoardViewContentContainer>
  //         <BoardColumn />
  //         <BoardColumn />
  //         <BoardColumn />
  //         <BoardColumn />
  //         <BoardColumn />
  //         <BoardColumn />
  //       </BoardViewContentContainer> */}
  //       {/* NOTE: Official code */}
  //       <BoardViewContentContainer>
  //         {tags.map((tagId: number) => {
  //           const tagGroup: DataArray["data"] = data.filter((d: Datum) => d["tagId"] === tagId);
  //           return <BoardColumn data={tagGroup} />;
  //         })}
  //       </BoardViewContentContainer>
  //     </BoardViewMainContainer>
  //   );
  // } else {
  //   return <div>Loading</div>;
  // }

  console.log("===Rerendered BoardView===");
  console.log(tags);

  return (
    <BoardViewMainContainer>
      {/* NOTE: Official code */}
      <BoardViewContentContainer>
        {tags.map((tagId: number) => {
          const tagGroup: DataArray["data"] = data.filter((d: Datum) => d["tagId"] === tagId);
          // console.log(`Rendering - ${tagId}`);
          return <BoardColumn data={tagGroup} key={tagId} />;
        })}
      </BoardViewContentContainer>
    </BoardViewMainContainer>
  );
};

export default BoardView;
