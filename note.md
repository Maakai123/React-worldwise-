### Step1 run npm create vite@latest or vite@4 for this tutorial 

### Step2 use React frame work 
### Step3 cd worldwise, npm install and npm run dev 

### Step4 Get Eslint:  npm install eslint vite-plugin-eslint eslint-config-react-app --save-dev

### Step5 Configure Eslint: create folder called .eslintrc.json 

### Step6 Configure Eslint in vite.config: Add eslint in the vite config Array 




###  Single Page Applications, React Routing and SPA's
npm i react-router-dom   or npm i react-router-dom@6

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Product from './pages/Product'

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path='product' element={<Product />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


In React we match each URL to a Specific React componet 
Route: Each matches between a URL and a component 

When one of those specific URLS gets visited,the corresponding React component will be rendered

WHAT IS ROUTING : We match different URLs to  different UI views (React components) : routes 


### Importance of Routing 
This enables users to navigate between different apps screens, using the browser URL 

Keeps the UI in sync with the current browser URL.
### IN REACT 
The routs only runs  in the browser / on client and not on Server like NextJS


###  React Router is a third ;party package manages routing 
This allows us to effectively build Single-Page Applications

### What are Single-Page Applications ?
Apllications that is excuted entirely on the client(browsers)

the page is never re-loaded, feels like a native app 
Additional data might be loaded from a web API

### User clicks rounter link => URL is changed => Dom is Updated: React component corresponding to the new URL is rendered.








In the WorldWise app, users can visit 3 routes
### www.example.com/ -> login  www.example.com/longin -> redirected to app-> www.example.com/app

Note all the above renders different React components 




### HOW TO SELECT LINKS, create a component folder with PageNav.jsx file and use the NavLink from react-dom

###  Nested Route ? 
The 3 nested routes are children of the App component 

<Route path="app" element={<AppLayout />}>

        <Route path="cities" element={<p>List of Cities</p>} />
        <Route path="countries" element={<p>Countries</p>} />
        <Route path="form" element={<p>Form</p>} />

      </Route>
Note: The children or nested routes can be exported with  <Outlet />
index route is the default rout if other routes does not march


### Always use a new Route for new Param 

### Each country  has access to position object, check cityItem on how to store URL that is transferable.

### Fake Api npm i json-server 
### Add this to script file in  packet.json file "server": "json-server --watch data/cities.json --port 8000 500 "
### Run npm  run server 

//programatically navigate to any part of the app
const navigate = useNavigate();
To naviage back means -1












