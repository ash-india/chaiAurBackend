gitignore generator to generate gitignore data

Two nested folders are created, and when pushed on github they are not tracked.

Because git tracks the files not the folders

To push these folders, as these are necessary to show the flow of the project

.gitkeep - a file created which is kept inside the folder

dependencies

nodemon is a module that restarts the server/ application if it finds a change in code

dependencies are those dependencies which are used in the development phase as well as production phase

while dev dependencies are only used during the development phase

nodemon will be installed as dev-dependency

npm i -D nodemon

npm i --save-dev nodemon

folders with keywords

controllers - functionalities

db - connection logic with database

middleware - these are files that lies between backend logic and database  and may manipulate data

models - database model

routes - app.get/post/put ...

utils - utilities store those files which are used again and again

in large applications,  minor conflicts for spaces, tabs, semicolons may arise.

So prettier is used to manage same pattern for all code written by different individuals.

Also it is a dev-dependency

create a file .prettierrc

.prettierignore to ignore those files where prettier shouldn't be implemented
