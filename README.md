# Project title: Bad Bank Project

## Description/Motivation of Project:
This project allows you to enter a site simulating as if it's a banking portal to create an account, log in and also perform certain actions such as a deposit or withdrawal to the account, in addition to being able to see the balance and see all the information.
The reasons why this project exists are because it's important to show the capabilities for using a full stack development to a real use case, helping users to control their financial information and building this project to achieve the objectives of being an easy to use application, also solving the problem of the lack of a system that integrates all banking functionalities in an intuitive way.
The motivation of the project is to be able to use the development tools seen in the Mit XPro course to have a project with a login/signup method, queries to APIs and a database in MongoDB.

## How to Run - Installation Guidelines:
To run the Back-end project locally, follow the next steps:
1. Download the project using git clone syntax.
2. Open the project with your IDE, for example: Visual Studio Code.
3. Install all the libraries using the following command in your IDE terminal (npm install).
4. To run the project use the following command (node server.js)
5. Install MongoDB service.
6. Start MongoDB service.
7. Install Docker.
8. Start Docker.
9. Run MongoDB inside docker with the following command (docker run -p 27017:27017 --name badbank -d mongo)
10. To run the mongo_test file use the following command (node mongo_test.js)
11. To open the project open the following URL with an explorer: localhost:3001.

## How to Stop project:
To stop the project you should type the following command in your IDE terminal: CNTRL + C on Windows or CMD + C on a Mac.

## Technology used:
The technology used for this project is the following:
- Node.js with Express for the server-side logic and API endpoints.
- MongoDB as the NoSQL database for storing user account information.
- JSON Web Tokens (JWT) for authentication and generating tokens.
- CORS (Cross-Origin Resource Sharing) middleware for enabling cross-origin requests.
- Axios for making HTTP requests from the frontend to the backend.
- Docker for containerizing the MongoDB database.

## Features:
The features for this project are the following:
- User Account Creation: Users can create a new account by providing their name, email, and password.
- User Authentication: Users can log in with their email and password, and a JWT token is generated for authenticated requests.
- Account Finding: Users can find their account details by providing their email address.
- Account Update: Users can deposit or withdraw funds from their account, and the balance is updated accordingly.
- Token Generation: JWT tokens are generated for authenticated requests, allowing secure access to protected routes.
- Error Handling: The backend handles errors gracefully and provides appropriate error messages for different scenarios.
- Cross-Origin Requests: CORS middleware is used to allow cross-origin requests from the frontend application.
- Logging: The backend logs messages to the console for debugging and monitoring purposes.
- Server Setup: The backend server is set up to listen on port 3001 for incoming requests.
- Database Connection: The backend connects to a MongoDB database using the MongoDB Node.js driver.

Some features to add in the future would be to see transaction history, account verification, notifications, limit settings, currency conversion, scheduled transactions, multi-factor authentication, user profile, admin dashboard, and data analytics.

## Improvements made:
- The project has been restructured to separate the front-end from the back-end into different workspaces.
- Code Refactoring: The code has been refactored to improve readability, maintainability, and organization.
- Database Connection Handling: The database connection handling has been improved to ensure better performance and reliability.
- Error Handling: More robust error handling has been implemented to provide better feedback to users and handle unexpected scenarios gracefully.
- Security Enhancements: The security of the backend has been enhanced, including better password handling and token generation.
- Functionality Expansion: Additional functionality has been added, such as the ability to update user information and retrieve all user accounts.
- Logging: Logging has been implemented to facilitate debugging and monitoring of the application.
- Performance Optimization: The code has been optimized for better performance, including faster response times and reduced resource consumption.
- Code Comments: Detailed comments have been added to the code to improve readability and understanding.
- Documentation: The README file has been updated with detailed information about the project, including installation instructions and usage guidelines.
- Testing: Unit tests or integration tests may have been added to ensure the reliability of the application.

## Roadmap of future improvements:
The future improvements to apply in this project is to build more API endpoints.

## Notes:
- The project was created with node 21.5.0

## License information:
MIT License
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
