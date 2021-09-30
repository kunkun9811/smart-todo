## Project Structure

#### Using the following file structure

https://github.com/oldboyxx/jira_clone/tree/master/client<br>
In essence, the main rule to follow: \*\* Files from one module/folder/directory can only import from the _children_ directories (in some special cases, the _ancestor_ directories) within the _SAME_ module/folder/directory AND from `shared`.

| Directory or File | Description                                                                                                                                                                 |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `index.tsx `      | The entry file.                                                                                                                                                             |
| `App`             | This directory is going to contain all the files required to keep running throughout the application.                                                                       |
| `pages`           | This directory contains all the main pages for the application.                                                                                                             |
| `shared`          | This directory contains shared resources that can be used across different areas of the application. Things like **components**, **constants**, and **models(interfaces)**. |
| `state`           | This directory contains **ALL** the required logic for **Redux**.                                                                                                           |
| \*\*`mock-data`   | This directory is **TEMPORARY**. It is used before database and backend are set up.                                                                                         |
