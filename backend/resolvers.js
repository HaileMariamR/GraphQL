import UserModel from "./model.js";
export const Allresolvers = {
  person: () => {
    return {
      name: "harrymariam",
      email: "harry@gmail.com",
    };
  },

  hello: () => "Graphql - Demo",
  lastone: () => "Lastone",
  printName: ({ name }) => `hey! ${name}`,

  users: async () => {
    let users = UserModel.find();
    return users;
  },

  

  createUser: async ({ inputperson }) => {
    const personInput = {
      name: inputperson.name,
      email: inputperson.email,
    };
    const user = UserModel(personInput);
    return user
      .save()
      .then((outputuser) => {
        console.log(outputuser);
        return outputuser;
      })
      .catch((err) => {
        console.log(err);
      });
  },






  deleteUser: async ({ inputdeleteemail }) => {
    const deleteuser = await UserModel.deleteOne({
      email: inputdeleteemail.email,
    });
    if (deleteuser) {
      return "Successfully Deleted";
    } else {
      return "user doesnt exist.";
    }
  },
};
