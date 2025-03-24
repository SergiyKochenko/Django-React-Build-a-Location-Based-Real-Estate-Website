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
  - [Setting Up a Custom User Model](#setting-up-a-custom-user-model)
  - [Creating .env File](#creating-env-file)
  - [Creating a Superuser](#creating-a-superuser)
  - [Creating Property Listings in the Admin Panel](#creating-property-listings-in-the-admin-panel)
  - [Creating an API Endpoint for Property Listings](#creating-an-api-endpoint-for-property-listings)
  - [Setting Up Django Cors Headers](#setting-up-django-cors-headers)
  - [Making Requests from the Frontend to the Backend](#making-requests-from-the-frontend-to-the-backend)
  - [Referencing Images in React](#referencing-images-in-react)
  - [API Authentication with Djoser](#api-authentication-with-djoser)
  - [Building the Registration Page](#building-the-registration-page)
  - [Building the Login Page](#building-the-login-page)
  - [Creating User Registration](#creating-user-registration)
  - [Register Component](#register-component)
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
  - [Testing the useEffect Hook](#testing-the-useeffect-hook)
  - [Cleaning Repository History](#cleaning-repository-history)
  - [Another Way of Managing State in React](#another-way-of-managing-state-in-react)

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
   - **Install Axios:**
     ```bash
     npm install axios
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
django-admin startproject backend
```

## Installing GeoDjango
For setting up GeoDjango on Windows, follow these steps:
1. Download the appropriate GDAL wheel from: https://wheelhouse.openquake.org/v3/windows/py311/?utm_source=chatgpt.com
2. Install GDAL using pip (adjust the path as needed):
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
   ```

## Setting Up Spatial Database (PostgresSQL & PostGIS)
Install the required adapter:
```bash
pip install psycopg2
```
Configure your DATABASES setting in `backend/backend/settings.py` as follows:
```python
DATABASES = {
    'default': {
        'ENGINE': 'xxxxxxxxxxxxxxx',
        'NAME': 'xxxxxxxxxxxxxxx',
        'USER': 'xxxxxxxxxxxxxxx',
        'PASSWORD': 'xxxxxxxxxxxxxxx',
        'HOST': 'xxxxxxxxxxxxxxx',
        'PORT': 'xxxx',
    }
}
```
For more details, refer to your Render dashboard: https://dashboard.render.com/d/dpg-cvfj0s1opnds73batjl0-a

## Setting Up a Custom User Model
To support custom user authentication, create an app (e.g., "users") and define your custom user model. Then update your settings by adding:
```python
AUTH_USER_MODEL = 'users.User'
```
After updating, run:
```bash
python manage.py makemigrations
python manage.py migrate
```

## Creating .env File
To securely manage configurations, install python-dotenv:
```bash
pip install python-dotenv
```
Create a `.env` file in the project root with the following content:
```properties
DB_NAME=xxxxxxxxxxxxxxx
DB_USER=xxxxxxxxxxxxxxx
DB_PASSWORD=xxxxxxxxxxxxxxx
DB_HOST=xxxxxxxxxxxxxxx
DB_PORT=xxxx
```
Ensure `.env` is included in your `.gitignore`.

## Creating a Superuser
After setting up the database and custom user model, create a superuser by running:
```bash
python manage.py createsuperuser
```
Follow the prompts:
```
Username: Admin
Email: xxxxxxxxxxxxxxx
Password: 
Password (again):
```

## Creating Property Listings in the Admin Panel
After setting up superuser and running the server, navigate to `http://localhost:8000/admin`. In the admin panel:
- Log in with your superuser credentials.
- In the "Listings" section, click "Add Listing".
- Fill in the listing details. The form will include fields such as title, description, area, borough, listing type, property status, price, rental frequency, rooms, and amenities.
- For the location, enter the latitude and longitude values; these will be combined to set the geographic Point.
- Save the listing to have it appear on the map and in the property listings.

## Creating an API Endpoint for Property Listings
First, install the required packages:
```bash
pip install djangorestframework
pip install djangorestframework-gis
```
Then, create a serializer for the Listing model in a project at `backend/listings/serializers.py`:
```python
from rest_framework import serializers
from rest_framework_gis.serializers import GeoFeatureModelSerializer
from .models import Listing

class ListingSerializer(GeoFeatureModelSerializer):
    class Meta:
        model = Listing
        geo_field = "location"
        fields = '__all__'
```
Next, create a viewset to expose the API in `backend/listings/views.py`:
```python

from rest_framework import viewsets
from .models import Listing
from .serializers import ListingSerializer

class ListingViewSet(viewsets.ModelViewSet):
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer
```
Finally, register the API endpoint in your main URL configuration (`backend/backend/urls.py`):
```python

from django.urls import path, include
from rest_framework import routers
from listings.views import ListingViewSet

router = routers.DefaultRouter()
router.register(r'listings', ListingViewSet)

urlpatterns = [
    ...existing code...
    path('api/', include(router.urls)),

]
```

## Setting Up Django Cors Headers

To enable CORS support in this Django project, install the package:
    
    pip install django-cors-headers

Then, ensure that have added `'corsheaders'` to the `INSTALLED_APPS` and added the middleware at the top of the `MIDDLEWARE` list in `settings.py`:

```python
# ... in settings.py:
INSTALLED_APPS = [
    # ...existing apps...
    'corsheaders',
    # ...existing apps...
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    # ...existing middleware...
]
```

With these changes, CORS is enabled (defaulting to allow all origins as set by `CORS_ALLOW_ALL_ORIGINS = True` in the settings).

## Making Requests from the Frontend to the Backend

Using Axios along with React’s useEffect hook to fetch data correctly (including a cancellation token to prevent memory leaks):

```javascript
import Axios from 'axios';
import { useEffect, useState } from 'react';

function YourComponent() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const source = Axios.CancelToken.source();
    Axios.get('http://127.0.0.1:8000/api/listings/', { cancelToken: source.token })
      .then(response => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        if(!Axios.isCancel(error)) {
          console.log(error);
        }
      });
    return () => {
      source.cancel();
    };
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {data.map(item => <div key={item.id}>{item.title}</div>)}
    </div>
  );
}
```

## Referencing Images in React

When working with images served by the Django backend in this React application, ensure that those static and media files are served properly. During development, can reference images using the backend's MEDIA_URL. For additional details, see the [Django Static Files Documentation](https://docs.djangoproject.com/en/5.1/howto/static-files/).

For example, in the React component it might render an image like this:
```javascript
// In the React component
<img 
  src={`${process.env.REACT_APP_BACKEND_URL}/media/pictures/2025/03/23/image1.jpg`} 
  alt="Listing" 
/>
```

## API Authentication with Djoser

This project uses [Djoser](https://djoser.readthedocs.io/en/latest/getting_started.html) for token authentication.  
To install Djoser, run:
```
pip install -U djoser
```

## Building the Registration Page

The registration page is built using React and Material UI. It includes form fields for Username, Email, Password, and Confirm Password along with a styled Sign Up button. Custom layouts via Material UI's Grid and makeStyles ensure a responsive design.

## Building the Login Page

The login page is built using React and Material UI. It includes form fields for Username and Password, a styled Sign In button, and a link directing users to the registration page. The design leverages Material UI's Grid layout and custom styles via makeStyles to ensure responsiveness.

## Creating User Registration

User registration can be performed via the registration page or directly through the API using Djoser. To create a new user:
- Navigate to the `/register` route in the frontend.
- Fill out the form with Username, Email, Password, and Confirm Password.
- On submission, a POST request is sent to the Djoser endpoint (e.g., `http://127.0.0.1:8000/api-auth-djoser/users/`) containing the user credentials.
- Ensure that the `USER_CREATE_PASSWORD_RETYPE` setting is enabled in Django so that passwords must be retyped for confirmation.
  
After submitting the registration form:
- Verify that a successful response (HTTP 201) confirms user creation.
- If registration succeeds, proceed to the Login page to authenticate.
- For any errors (such as mismatched passwords or invalid input), refer to the API response and adjust your form entries accordingly.

## Register Component

The Register component (located in `frontend/src/Components/Register.js`) adopts the `useImmerReducer` from the `use-immer` package for state management. This approach allows for simplified and immutable state updates when handling form changes and side-effects during user registration.

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
The Listing model is defined in `backend/listings/models.py` and includes fields such as title, description, area, borough, listing type, property status, price, rental frequency, rooms, and additional amenities. In addition, new image fields (picture1, picture2, picture3, picture4, and picture5) have been added. These fields allow you to upload multiple images per listing and are configured with date-based upload directories.

After updating the model, run:
```bash
python manage.py makemigrations
python manage.py migrate
```

## Adding the Location Field to the Listing Model
The Listing model now includes a new `location` field, which is a `PointField` provided by Django's GIS framework. This field allows storage of geographical coordinates for each listing. For more details on using geographic fields in Django, see: https://docs.djangoproject.com/en/5.1/ref/contrib/gis/

## Testing the useEffect Hook

In the Testing component, the useEffect hook watches the count state and logs its current value whenever it changes. For example, the hook implementation looks like this:

```javascript
useEffect(() => {
  console.log(`The current count is: ${count}`)
}, [count])
```

This allows to verify that updates to the count state (triggered by the Increase and Decrease buttons) are working as expected.

## Cleaning Repository History

If push protection errors occur due to committed secrets, you can remove them from your git history using git-filter-repo. First, install it by running:
```
pip install git-filter-repo
```
For detailed instructions on how to use git-filter-repo, refer to the [git-filter-repo repository](https://github.com/newren/git-filter-repo).

## Another Way of Managing State in React

For more advanced state management using immutable patterns, consider using Immer along with the use-immer hook. This allows to write state updates in a mutable style while preserving immutability underneath.

To install use-immer, run:
```
npm install immer use-immer
```
Once installed, it can use use-immer in the components to simplify state updates:
```javascript
import { useImmerReducer } from 'use-immer';

const initialState = {/* ... */};
function reducer(draft, action) {
  switch (action.type) {
    // update draft directly...
  }
}
const [state, dispatch] = useImmerReducer(reducer, initialState);
```
