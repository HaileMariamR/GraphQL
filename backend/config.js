import mongoose from 'mongoose'

const databaseUrl = "mongodb://localhost:12345/graphqldb";

export const databaseconfiguration = () =>{

    mongoose.connect(databaseUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      })
    .then(()=>{
        console.log("Database connected succesfully!");
    })
    .catch((error)=>{
        console.log("Sorry!, the Database connection Failed");
    })

}