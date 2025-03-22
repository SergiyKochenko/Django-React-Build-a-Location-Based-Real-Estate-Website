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
  - [Installing Django](#installing-django)
  - [Installing GeoDjango](#installing-geodjango)
- [settings.py](#settingspy)
  - [Usage](#usage)
  - [Deployment](#deployment)
  - [Credits](#credits)
  - [Acknowledgements](#acknowledgements)
  - [Project Structure \& Code Organization](#project-structure--code-organization)
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
  - [Styling with Material UI](#styling-with-material-ui)
  - [Building the Home Page Header](#building-the-home-page-header)
  - [Map Marker \& Popup](#map-marker--popup)
  - [Displaying Listings on the Map](#displaying-listings-on-the-map)
  - [Displaying Listings in MUI Cards](#displaying-listings-in-mui-cards)
  - [Marker Position State](#marker-position-state)
  - [Price Formatting](#price-formatting)
  - [Drawing/Importing Shapes (Polygons, Polylines) in React-Leaflet](#drawingimporting-shapes-polygons-polylines-in-react-leaflet)
  - [Setting up the Listing Model](#setting-up-the-listing-model)
  - [Adding the Location Field to the Listing Model](#adding-the-location-field-to-the-listing-model)

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
     python -m venv myvenv
     source myvenv/Scripts/activate
     ```
   - To exit the virtual environment, run:
     ```bash
     deactivate
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
   - **Install Material UI dependencies:**
     ```bash
     npm install @mui/material @emotion/react @emotion/styled
     npm install @mui/styles
     ```
   - **Install React-Leaflet dependencies:**
     ```bash
     npm install leaflet react-leaflet
     ```
   - Include Leaflet's CSS in the project (e.g., in index.html or a main CSS file):
     ```html
     <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
     ```
   - Start the development server:
     ```bash
     npm start
     ```
   - Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Installing Django
To get started with Django, run the following commands:
```bash
pip install Django
pip freeze
django-anmin startproject backend
```

## Installing GeoDjango
For setting up GeoDjango on Windows, follow these steps:
1. Download the appropriate GDAL wheel from: https://wheelhouse.openquake.org/v3/windows/py311/?utm_source=chatgpt.com
2. Install GDAL using pip:
```bash
pip install path\to\GDAL-3.7.3-cp311-cp311-win_amd64.whl
```
3. Add the following to your settings.py file:
# settings.py
import os
if os.name == 'nt':
    VENV_BASE = os.environ['VIRTUAL_ENV']
    os.environ['PATH'] = os.path.join(VENV_BASE, 'Lib\\site-packages\\osgeo') + ';' + os.environ['PATH']
    os.environ['PROJ_LIB'] = os.path.join(VENV_BASE, 'Lib\\site-packages\\osgeo\\data\\proj') + ';' + os.environ['PATH']
    

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

## Project Structure & Code Organization

- **Assets Added:** A new Assets folder now holds images (e.g., city.jpg) used in the Home page.
- **Header Component Created:** A dedicated Header component builds the navigation bar with Material-UI's AppBar and Toolbar.
- **Home Page Re-Organized:** The Home page now leverages the Header component and displays a promotional background image, with overlay text and a call-to-action button.
- **Code Re-Organization:** Components are now separated for clarity, and styling is maintained using Material-UI's makeStyles.

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

## Styling with Material UI
This project uses Material UI for rapidly building and styling UI components. In addition to the core Material UI packages, the project utilizes `@mui/styles` for custom style solutions.

## Building the Home Page Header

The home page header is built using Material-UI components. Key points:
- Utilizes AppBar and Toolbar components for the header container.
- Left navigation shows the brand/logo.
- Center contains navigation links.
- Right displays action buttons for adding a property and logging in.
- Custom styling is applied using makeStyles.

## Map Marker & Popup

The project utilizes map markers and popups to provide interactive maps using React-Leaflet. For quick-start examples and detailed documentation, refer to:
- Leaflet Quick Start Guide: [leafletjs.com/examples/quick-start/](https://leafletjs.com/examples/quick-start/)
- React-Leaflet Documentation: [react-leaflet.js.org](https://react-leaflet.js.org/)
- Leaflet Providers Preview: [leaflet-extras.github.io/leaflet-providers/preview/](https://leaflet-extras.github.io/leaflet-providers/preview/)
- Map Icons: [mapicons.mapsmarker.com](https://mapicons.mapsmarker.com/)
- Material UI: [mui.com](https://mui.com/)

## Displaying Listings on the Map
The Listings component iterates through the `myListings` data set to display property markers on the map. It dynamically assigns an icon based on the property type (House, Apartment, or Office) and configures each marker with a popup that shows listing details such as title, a preview image, and a short description.

## Displaying Listings in MUI Cards
In addition to being shown on the map, property listings are presented using Material UI Cards. Each card displays listing details including the title, an image, a brief description, and price information overlaid on the picture, offering users an attractive and organized view of available properties.

## Marker Position State
In the Listings component, the marker's position is stored in state using two variables: `latitude` and `longitude`. These values are updated via the "GO EAST" and "GO CENTER" buttons, which reposition the marker on the map.

## Price Formatting
Property prices are formatted to include thousand separators. This is achieved by converting the price to a string and applying:
  
listing.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

## Drawing/Importing Shapes (Polygons, Polylines) in React-Leaflet
React-Leaflet supports drawing various shapes on maps. In the Listings component, shapes such as polylines and polygons are rendered by importing and configuring the Polyline and Polygon components. These shapes enhance the map visualization by outlining routes or areas with custom colors, weights, opacities, and fill properties.

## Setting up the Listing Model
The Listing model is defined in `backend/listings/models.py` and includes fields such as title, description, area, borough, listing type, property status, price, rental frequency, rooms, and additional amenities. After updating the model, run:
```bash
python manage.py makemigrations
python manage.py migrate
```

## Adding the Location Field to the Listing Model
The Listing model now includes a new `location` field, which is a `PointField` provided by Django's GIS framework. This field allows storage of geographical coordinates for each listing. For more details on using geographic fields in Django, see: https://docs.djangoproject.com/en/5.1/ref/contrib/gis/
