database models are stored inside model folder

it is presferred to write file name as {filename}.model.js

mongoose will be used to create models for database

```javascript

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    ${modelling}
})

export const User = mongoose.model("User",userSchema);

```

modelname will be users (models in plural form and in lowercase)

Timestamp is added with the creation of schema

mongodb is capable to store and handle images, but it makes database heavy and slow

So we will upload the images in cloud, and store the link into the database

While creating model this may happen that the attribute is storing an array of some combination.

In that case we can create another schema, and put that schema inside the array, to make the model understand this is the type of data to be stored

If a should only be a,b or c. Then we can use enum