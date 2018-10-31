Hi All, need some help on understanding how to load data async into form for editing in react.

Specifically, the part where you get the data from a higher state passed in as props in a asynchronous manner. 

How do you wire up the handle input so that the screen reflect what the user is typing if he is updating a form input ?

I create a github project with the minimal thing to demonstrate what I mean @ https://github.com/cyberguard/react_question/tree/question_async_form_edit

Basically, I have a form NewClientFom.jsx that has it's value passed to it's props, but it's loaded asynchronous (simulated with a 3sec pause in this demo) 

The data is loaded in the redux store so NewClientFom.jsx shows a "Loading..." div until the data become available.

Now as you can see, if I load the data from the props to the state in the constructor, the constructor is evaluated before the async call come back. leaving me with a state that never get updated with the value of the props.

However if I pick it up from the props, it works great... until I try to edit. I can't modify the props, so how do I update the value of the input box as the user is modifying it to reflect the change ?

I'm sure I'm overlooking something simple, but I've been stuck on this for a week and can't get any answer. all the demo are for empty form that you fill and submit. none of them are for edit of async loaded data.

thanks in advance  for any pointer/tutorial/video 

-------


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
