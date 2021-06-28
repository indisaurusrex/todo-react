# Todo List App in React

This project was created as part of Turing Grow upskilling in React. This repo is initially for the front end, built in React and will allow users to add to and edit a todo list. The main aim is to show a good understanding of state management and interactivity. 

## Features for initial app

1. - [x] Create an item
2. - [x] See all items
3. - [x] Delete an item
4. - [x] Edit an item
5. - [x] Complete an item
6. - [ ] Edit order (drag items around? Sort by function?)

## Look and feel plans
- [x] Rainbow background 
- [x] Card over the top (mobile first look)
- [x] Clean look
- [ ] Clouds turning into sunshine animation when you do something?
    - [x] Change card header image of weather according to your completion of todo in %

## Set up
Clone this repo with `git clone git@github.com:indisaurusrex/todo-react.git`
Install dependencies using `yarn install`
Run the app using `yarn start`

## About the project
Originally written in React class components, everything has been converted to use React Hooks as these are seen as best practice right now.
CSS has been converted into CSS Modules as this is currently the preferred option and means components can be more easily reused. 
Testing was initially not done using TDD. Once testing is implemented for existing features (as of 28th June '21), all new features should be written using TDD.

## Future opportunities

Create and connect to a NodeJS web server, create and connect to a CRUD db web server. 

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
If there are lint errors the page may not load until they are resolved, and you may see the lint errors in the browser instead.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)
