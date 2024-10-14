const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    getUsers: async () => {
      let results = await User.find();
      return results;
    },

  
    findCurrentUser: async (_parent, { username }) => {
      let foundUser = await User.findOne({ username });
      if (!foundUser) {
        throw new Error("User not found");
      }
      console.log("User Found: ", foundUser);
      return foundUser;
    }
  },

  Mutation: {
    login: async (_parent, { email, password }) => {
      let user = await User.findOne({ email });

      if (!user) {
        throw new Error("Not Authorized");
      }

      const isValid = await user.isCorrectPassword(password);

      if (!isValid) {
        throw new Error("Not Authorized");
      }

      const token = signToken(user);
      return { token, user };
    }
  }
};

module.exports = resolvers;