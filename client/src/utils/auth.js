import decode from 'jwt-decode';
import { gql } from '@apollo/client';

// create a new class to instantiate for a user
class AuthService {
  // get user data from token
  getProfile() {
    return decode(this.getToken());
  }

  // check if user's logged in
  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  // check if token is expired
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      return decoded.exp < Date.now() / 1000;
    } catch (err) {
      return false;
    }
  }

  // Retrieves the user token from localStorage
  getToken() {
    return localStorage.getItem('id_token');
  }

  // Save token to localStorage and log the user in
  login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  // Logout user and clear token from localStorage
  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/');
  }

  // Login mutation with GraphQL
  async loginUser(email, password) {
    const LOGIN_USER = gql`
      mutation loginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
          token
          user {
            _id
            email
          }
        }
      }
    `;

    try {
      const { data } = await client.mutate({
        mutation: LOGIN_USER,
        variables: { email, password },
      });
      
      const { token } = data.loginUser;
      this.login(token); // Save token to localStorage
      return data.loginUser;
    } catch (error) {
      console.error("Login failed:", error);
      return null;
    }
  }

  // Example query to check if the user is authenticated using token in localStorage
  async getMe() {
    const GET_ME = gql`
      query getMe {
        me {
          _id
          email
          name
        }
      }
    `;

    try {
      const { data } = await client.query({
        query: GET_ME,
      });

      return data.me;
    } catch (error) {
      console.error("Fetching user info failed:", error);
      return null;
    }
  }
}

export default new AuthService();