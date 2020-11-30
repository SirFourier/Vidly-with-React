# Link to the website
This was deployed using heroku:
https://sleepy-brook-10846.herokuapp.com/movies
(May take a while to initially load database in but after that it should be fine)

![vidly](public/vidly.gif?raw=true)

# Vidly with React
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Motivation
I have built this up to learn react. This is based on exercises and lessons by [Code with Mosh](http://codewithmosh.com) through the mastering React course.

## Features and learning outcomes
- Basic react learning outcomes
  - real DOM and virtual DOM comparisons
  - states in classes
  - stateless functions
  - passing props and children to a component
    - destructuring arguments
  - life cycle hooks
    - constructor
    - componentDidMount
    - render
    - unmounting
- Navigation bar using routing and links
  - switch and routing
  - passing movie id using route parameters
  - redirection to not-found page on invalid movie id
  - redirection to login page on invalid authentication
    - done using protected routes
- Genre list selector
  - filtering movies based on genre
- Movies Table
  - sorting movies by ascending/descending alphabetical order based on which header title is clicked
  - search box
  - editable movie forms
  - pagination
  - new movie form
  - like button
  - delete button for admins
- Forms
  - Movie form
  - Registration form
  - Login form
- Services
  - making server requests using axios
    - error handling and using toastify to display them
  - movies service
  - genres service
  - authentication service
  - user service
  - log service using sentry
  - jwt tokens
  - connecting to mongodb atlas database
- Deployment
  - setting enviornment variables to set axios baseURL
  - using mongoDB atlas to store movies, genres, and users registered
  - pushing front-end to heroku via git
  - pushing back-end to heroku via git

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
