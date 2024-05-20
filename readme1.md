Server - that serves

express - for routing

mongoose - connecting with database

REquest from computer/mobile

A server which is always listening responds to the requests

/ :- is the most common home route

/login :- is for login setup

there are many routes possible

express for handling requests

mongoose for database part

Data modelling :- defining the structure of data

Before creating any application, we should ask first what data to be stored (Not where)

Then a diagram should be created that these are the required fields, and those datas should be inserted.
A single change in a datapoint may create a problem afterwards.

mongoose is for data modelling and mongodb is the database

npm i mongoose

import mongoose from "mongoose"

In mongodb the attribute automatically changes to plural form of the attribute and in lowercase like User to users, Todo to todos

const userSchema = new mongoose.Schema({`fields to be entered here`})

Two ways for the fields

{
    name:String,
    email:String,
    age:Int,
    Salary:Int
}

But the second way is more better
{
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
}

export const User = mongoose.model("User",suserSchema);

This command states that create a data model User on the basis of UserSchema

gitignore generator to generate gitignore data

Two nested folders are created, and when pushed on github they are not tracked.
Because git tracks the files not the folders

To push these folders, as these are necessary to show the flow of the project
.gitkeep - a file created which is kept inside the folder
