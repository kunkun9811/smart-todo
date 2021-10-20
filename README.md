# Smart Todo

A smart todo application with assistant bot that help you extract requested information without user digging through their todos

## Important Info/updates

- Currently using JSON Server [https://github.com/typicode/json-server] as mock server for now. The JSON mock server data repo is @ [https://github.com/kunkun9811/smart-todo-mock-server/tree/main]

## Important TODOS (haha TODO)

- [10/19/2021] : [shared/API.ts][high] hide these URL in the remote machine in the future
- [10/19/2021] : [TableView/index.ts][medium] 'column' is not working again for react-table

## Checkpoint

- About to refactor everything with the new structure of our TODO data. [TodoPage/index.ts] is not done yet. Add input fields, make custom hooks for automatically detect the next "id", "boardOrder", and "tableOrder".

- Need to fix React-Table [TableView/index.ts] file. The 'column' for react-table seems to not be working with the new data structure for todo.
