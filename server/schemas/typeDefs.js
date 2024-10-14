const typeDefs = `

    type User {
        _id: ID!
        username: String
        email: String
        savedBooks: [Book]
    }

    type Book {
        _id: ID
        authors: [String]
        description: String
        bookId: ID  
        image: String
        link: String
        title: String
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        getUsers: [User]
        findCurrentUser(username: String): User
    }

    type Mutation {
        login(email: String, password: String): Auth
    }

`;


module.exports = typeDefs