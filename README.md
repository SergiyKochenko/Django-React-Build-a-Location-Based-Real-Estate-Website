# Django-React-Build-a-Location-Based-Real-Estate-Website

## Description
Django-React-Build-a-Location-Based-Real-Estate-Website is a full-stack web application that combines Django for backend services with React for the frontend. The project is designed to help users explore real estate properties based on location while providing a modern, responsive user experience.

In this project-based course, build a location-based real estate website. It is going to be a full stack web application with Django powering the backend and React Js the frontend.

I am going to build the frontend very fast by using Material UI which is a very easy and intuitive React library for building UI components. Throughout the course I will get to use lots of Material UI components that I will easily style.

I am then going to build the API with Django Rest Framework (DRF) and I am going to make requests to the API with React.

Leaflet is a JavaScript library for building interactive maps. I will add a geographic aspect to this project by placing the property listings on a map. I am going to achieve that with React-Leaflet which provides a binding between React and Leaflet.

I am also going to make my PostgreSQL database be spatially aware by adding the PostGIS extension to it. So, on top of making regular queries to the database, I am also going to make spatial queries (geometric information such as distance).

I am also going to cover user authentication with the Djoser library. I will get end users to add, delete or update property listings from the frontend. I am also going to handle both client-side errors and server-side errors in the forms.

Once I am done building the website on my local machine, I will then deploy it with Digital Ocean and Namecheap. During deployment, I am going to:

- Push our project to GitHub
- Get domain names for the backend and frontend
- Setup a mailbox in “private email”
- Setup an SSL certificate
- Install and setup Nginx and Gunicorn
- Store media file in the cloud with Digital Ocean spaces

I will be using:

- Windows
- Python 3.9
- Django 4.0
- React 17 (Updated for React 18-Works perfectly fine)
- Material UI 5
- Leaflet 1.7
- React-Leaflet 3.1
- PostgreSQL 14
- PostGIS 3.1
- Djoser 2.1
- Digital Ocean
- Namecheap
- Nginx
- Gunicorn
- Digital Ocean Spaces
- Private Email
- SSL Certificate
- GitHub
- Git
- Visual Studio Code
- PyCharm
- pgAdmin
- Postman
- Windows Terminal

## Table of Contents
- [Django-React-Build-a-Location-Based-Real-Estate-Website](#django-react-build-a-location-based-real-estate-website)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [UX](#ux)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Installation \& Setup](#installation--setup)
  - [Usage](#usage)
  - [Deployment](#deployment)
  - [Credits](#credits)
  - [Acknowledgements](#acknowledgements)
  - [JSX](#jsx)
    - [Example of JSX:](#example-of-jsx)
    - [Why use JSX?](#why-use-jsx)
    - [How JSX is Transformed:](#how-jsx-is-transformed)
    - [Using JSX in React Components:](#using-jsx-in-react-components)
  - [React Components](#react-components)
    - [Functional Components](#functional-components)
    - [Class Components](#class-components)
    - [Component Lifecycle](#component-lifecycle)
  - [React Properties (Props)](#react-properties-props)
    - [Passing Props](#passing-props)
    - [Default Props](#default-props)
    - [Prop Types](#prop-types)
  - [Looping Through an Array of Data](#looping-through-an-array-of-data)
    - [Example:](#example)
    - [Using Looping in a Component:](#using-looping-in-a-component)
  - [State (useState Hook)](#state-usestate-hook)
    - [Example:](#example-1)
    - [Why use useState?](#why-use-usestate)
  - [Handling Events](#handling-events)
    - [Example:](#example-2)
    - [Key Points:](#key-points)
  - [React Router \& Navigation](#react-router--navigation)

## UX
The application is designed with a focus on usability and a seamless user journey:
- **Responsive design:** Adapts to desktop, tablet, and mobile views.
- **Intuitive Navigation:** Easy access to property listings and detailed information.
- **Modern Interface:** Leveraging React’s component-based architecture for a dynamic experience.

## Features
- **Location-based Property Search:** Users can filter properties by location.
- **Interactive Map:** Visualize properties on a map.
- **Dynamic Listings:** Fetch and display real estate data in real-time.
- **Backend Integration:** Django provides robust APIs for data management.
- **Deployment Ready:** Configured for production with Create React App optimizations.

## Technologies Used
- **Front-End:** React, Create React App
- **Back-End:** Django, Django REST Framework
- **Styling:** CSS / Sass (or any preferred framework)
- **Build Tools:** Webpack, Babel
- **Testing:** Jest, React Testing Library (for React) and Django test framework

## Installation & Setup
1. **Clone the repository:**
   ```bash
   git clone <repository_url>
   ```
2. **Backend Setup:**
   - Navigate to the Django project folder.
   - Create and activate a virtual environment:
     ```bash
     python -m venv venv
     venv\Scripts\activate
     ```
   - Install backend dependencies:
     ```bash
     pip install -r requirements.txt
     ```
   - Run migrations and start the server:
     ```bash
     python manage.py migrate
     python manage.py runserver
     ```

3. **Frontend Setup:**
   - Navigate to the React project folder.
   - Install frontend dependencies:
     ```bash
     npm install
     ```
   - Start the development server:
     ```bash
     npm start
     ```
   - Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Usage
- **Development Mode:** Both Django and React servers run concurrently to provide a live development environment.
- **Testing:**
  - Run React tests:
    ```bash
    npm test
    ```
  - Run Django tests:
    ```bash
    python manage.py test
    ```

## Deployment
- **Building for Production:**
  - For React (frontend):
    ```bash
    npm run build
    ```
  - For Django (backend): Configure your production database, static files, and secure settings.
- **Hosting:** This project can be deployed on platforms such as Heroku, AWS, or DigitalOcean. Refer to the respective deployment guides for detailed instructions.

For additional details, please review the following resources:
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React Documentation](https://reactjs.org/)
- [Django Documentation](https://docs.djangoproject.com/en/stable/)
- [Django REST Framework](https://www.django-rest-framework.org/)

## Credits
- **Project Inspiration:** Code Institute’s Full-Stack projects
- **Acknowledgements:** Thanks to the open-source community and tutorials that helped shape this project.

## Acknowledgements
- Special thanks to Code Institute for the project guidelines and template suggestions.
- Gratitude to all contributors and resource providers that supported the project development.

## JSX
JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to XML or HTML. It is used with React to describe what the UI should look like. JSX makes it easier to write and add HTML in React.

### Example of JSX:
```jsx
const element = <h1>Hello, world!</h1>;
```

### Why use JSX?
- **Readability:** JSX makes the code easier to understand and maintain.
- **Integration:** It allows you to write HTML structures in the same file as JavaScript code.
- **Tooling:** JSX provides better error messages and warnings.

### How JSX is Transformed:
JSX is not valid JavaScript, so it needs to be transformed into JavaScript code using tools like Babel. For example, the JSX code:
```jsx
const element = <h1>Hello, world!</h1>;
```
is transformed to:
```javascript
const element = React.createElement('h1', null, 'Hello, world!');
```

### Using JSX in React Components:
JSX can be used inside React components to define the UI:
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

By using JSX, you can create complex UIs in a declarative and intuitive way.

## React Components
React components are the building blocks of a React application. They can be defined as either functional components or class components.

### Functional Components
Functional components are simple functions that return JSX. They do not have their own state or lifecycle methods.
```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

### Class Components
Class components are ES6 classes that extend from `React.Component`. They can have their own state and lifecycle methods.
```jsx
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

### Component Lifecycle
React components have a lifecycle that you can hook into to run code at specific times. The most commonly used lifecycle methods are:
- `componentDidMount()`: Called after the component is mounted.
- `componentDidUpdate()`: Called after the component is updated.
- `componentWillUnmount()`: Called before the component is unmounted and destroyed.

Example of using lifecycle methods in a class component:
```jsx
class Timer extends React.Component {
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate() {
    console.log('Component updated');
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return <h1>{this.state.date.toLocaleTimeString()}</h1>;
  }
}
```

## React Properties (Props)
Props (short for properties) are a way of passing data from parent to child components in React. They are read-only and should not be modified by the child component.

### Passing Props
Props are passed to components similarly to how attributes are passed to HTML elements.
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
```

### Default Props
You can define default values for props using the `defaultProps` property.
```jsx
class Welcome extends React.Component {
  static defaultProps = {
    name: 'Guest'
  };

  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

### Prop Types
You can specify the types of props using the `prop-types` library to ensure that the props passed to a component are of the correct type.
```jsx
import PropTypes from 'prop-types';

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

Welcome.propTypes = {
  name: PropTypes.string
};
```

## Looping Through an Array of Data
To render lists in React, you can loop through an array using the `map()` method. Each element should have a unique `key` attribute.

### Example:
```jsx
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number}>{number}</li>
);
```

### Using Looping in a Component:
```jsx
function NumberList() {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <ul>
      {numbers.map((number) => (
        <li key={number}>{number}</li>
      ))}
    </ul>
  );
}
```

## State (useState Hook)
The useState hook is a fundamental part of managing state in React functional components. It lets you add state variables to functional components without needing a class.

### Example:
```jsx
import React, { useState } from 'react';

function Counter() {
  // Declare a new state variable "count" with initial value 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

### Why use useState?
- **Simplicity:** Manage state within functional components.
- **Reactivity:** The component re-renders automatically when state changes.
- **Modularity:** Keeps state management localized to the component.

## Handling Events
Handling events in React is similar to handling events on regular DOM elements, but with some syntactical differences. React events are named using camelCase, and event handlers are passed as functions rather than strings.

### Example:
```jsx
import React, { useState } from 'react';

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <button onClick={handleClick}>
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
}
```

### Key Points:
- **CamelCase:** Use `onClick` instead of `onclick`.
- **Function Handler:** Pass a function (e.g., `handleClick`) instead of a string.
- **Event Object:** The event object is automatically passed to the handler, allowing you to access details about the event if needed.

## React Router & Navigation
React Router DOM has been installed to manage page navigation. This update includes adding navigation to pages such as Home, Login, and Listings.
By using React Router, you can easily manage navigation and routing between different pages in your application.
