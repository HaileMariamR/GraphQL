import {buildSchema} from 'graphql'

export const firstSchema = buildSchema(`

    type Person {
        name : String,
        email :String 

    }
    type Query {
        person : Person,
        hello:String,
        lastone:String,
        printName(name:String!):String,
        users : [Person]
    }
    input PersonInput {
        name:String,
        email :String
    }

    input deleteEmailInput{
        email:String
    }

    type Mutation {
        createUser(inputperson:PersonInput):Person,
        deleteUser(inputdeleteemail : deleteEmailInput):String

    }

`) 