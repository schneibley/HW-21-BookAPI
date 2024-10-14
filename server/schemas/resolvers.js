const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (_parent, args, context) => {
      if (context.user) {
        return User.findById(context.user._id).populate('savedBooks');
      }
      throw new Error('Not authenticated');
    },
    getUsers: async () => {
      return User.find();
    },
    findCurrentUser: async (_parent, { username }) => {
      const user = await User.findOne({ username });
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    }
  },

  Mutation: {
    login: async (_parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error('Not Authorized');
      }
      const validPassword = await user.isCorrectPassword(password);
      if (!validPassword) {
        throw new Error('Not Authorized');
      }
      const token = signToken(user);
      return { token, user };
    },
    saveBook: async (_parent, { bookData }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          context.user._id,
          { $addToSet: { savedBooks: bookData } },
          { new: true }
        ).populate('savedBooks');
        return updatedUser;
      }
      throw new Error('You need to be logged in!');
    },
    removeBook: async (_parent, { bookId }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          context.user._id,
          { $pull: { savedBooks: { bookId } } },
          { new: true }
        ).populate('savedBooks');
        return updatedUser;
      }
      throw new Error('You need to be logged in!');
    }
  }
};

module.exports = resolvers;