# Book Search Engine - MERN Stack with GraphQL

## Description

This project is a partially functional Google Books API search engine built using the MERN (MongoDB, Express, React, Node.js) stack. It allows users to search for new books and save them to their personal account. This application was originally built with a RESTful API and refactored to use GraphQL with Apollo Server. It includes user authentication, allowing users to sign up, log in, and manage a list of saved books.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies](#technologies)
- [License](#license)
- [Deployment](#deployment)

## User Story

```md
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```

## Acceptance Criteria

```md
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
```

## Installation

1. Clone the repository to your local machine.

   ```bash
   git clone https://github.com/your-username/book-search-engine.git
   ```

2. Navigate into the project directory.

   ```bash
   cd book-search-engine
   ```

3. Install the necessary dependencies for both the server and client.

   ```bash
   npm install
   cd client && npm install
   ```

4. Create a `.env` file in the root of the project and add the following environment variables:

   ```bash
   MONGODB_URI=<Your MongoDB connection string>
   SECRET=<Your JWT secret>
   ```

5. Start the development server.

   ```bash
   npm run develop
   ```

## Usage

Once the app is running, you can perform the following actions:

- Search for books via the Google Books API.
- Create a user account via Signup.
- Log in with your user credentials.
- Save books to your account.
- View and manage your saved books.
- Log out of your account.

## Features

- **GraphQL API**: All data fetching and mutations are now powered by GraphQL, improving performance and flexibility.
- **User Authentication**: Secure authentication with JWT allows users to sign up, log in, and manage saved books.
- **Google Books API Integration**: Search for books by title and save them to your account for later viewing.
- **Responsive Design**: Fully responsive design ensures a seamless experience on both desktop and mobile devices.
- **Apollo Client**: Frontend is integrated with Apollo Client to handle all GraphQL requests and cache data for improved user experience.

## Technologies

- **MongoDB Atlas**: Cloud-hosted NoSQL database to store user information and saved books.
- **Express.js**: Backend framework for building the server and GraphQL API.
- **React.js**: Frontend library for building the user interface.
- **Node.js**: JavaScript runtime for the server environment.
- **Apollo Server**: For creating the GraphQL API.
- **JWT Authentication**: For handling user login and token-based authentication.
- **Google Books API**: External API for searching books by title, author, and other criteria.
- **Render**: Cloud platform for deploying the full-stack application.

## License

This project is licensed under the MIT License.

## Deployment

The project is deployed on Render with MongoDB Atlas. To deploy your own version, follow these steps:

1. Set up a MongoDB database using [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Deploy the project on [Render](# Book Search Engine - MERN Stack with GraphQL

## Description

This project is a fully functional Google Books API search engine built using the MERN (MongoDB, Express, React, Node.js) stack. It allows users to search for new books and save them to their personal account. This application was originally built with a RESTful API and refactored to use GraphQL with Apollo Server. It includes user authentication, allowing users to sign up, log in, and manage a list of saved books.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies](#technologies)
- [License](#license)
- [Deployment](#deployment)

## User Story

```md
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```

## Acceptance Criteria

```md
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
```

## Installation

1. Clone the repository to your local machine.

   ```bash
   git clone https://github.com/your-username/book-search-engine.git
   ```

2. Navigate into the project directory.

   ```bash
   cd book-search-engine
   ```

3. Install the necessary dependencies for both the server and client.

   ```bash
   npm install
   cd client && npm install
   ```

4. Create a `.env` file in the root of the project and add the following environment variables:

   ```bash
   MONGODB_URI=<Your MongoDB connection string>
   SECRET=<Your JWT secret>
   ```

5. Start the development server.

   ```bash
   npm run develop
   ```

## Usage

Once the app is running, you can perform the following actions:

- Search for books via the Google Books API.
- Create a user account via Signup.
- Log in with your user credentials.
- Save books to your account.
- View and manage your saved books.
- Log out of your account.

## Features

- **GraphQL API**: All data fetching and mutations are now powered by GraphQL, improving performance and flexibility.
- **User Authentication**: Secure authentication with JWT allows users to sign up, log in, and manage saved books.
- **Google Books API Integration**: Search for books by title and save them to your account for later viewing.
- **Responsive Design**: Fully responsive design ensures a seamless experience on both desktop and mobile devices.
- **Apollo Client**: Frontend is integrated with Apollo Client to handle all GraphQL requests and cache data for improved user experience.

## Technologies

- **MongoDB Atlas**: Cloud-hosted NoSQL database to store user information and saved books.
- **Express.js**: Backend framework for building the server and GraphQL API.
- **React.js**: Frontend library for building the user interface.
- **Node.js**: JavaScript runtime for the server environment.
- **Apollo Server**: For creating the GraphQL API.
- **JWT Authentication**: For handling user login and token-based authentication.
- **Google Books API**: External API for searching books by title, author, and other criteria.
- **Render**: Cloud platform for deploying the full-stack application.

## License

This project is licensed under the MIT License.

## Deployment

The project is deployed on Render with MongoDB Atlas. 


 [Render](https://hw-21-bookapi.onrender.com)

