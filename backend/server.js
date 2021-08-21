import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { firstSchema  } from './schema.js'
import { Allresolvers } from './resolvers.js'
import { databaseconfiguration } from './config.js'
import cors from 'cors'


const server = express()
databaseconfiguration();
server.use(cors({
    origin:"http://localhost:3000"
}))

server.get('/' , (req, res)=>{
    res.send("GraphQl demo")
});


server.use('/api' , graphqlHTTP(
   {
       'schema' : firstSchema,

       'rootValue':Allresolvers,

       'graphiql' : true
   }
));



server.listen(3800 , ()=>{

    console.log("Server is running at port 3800");
});