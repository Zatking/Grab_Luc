import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import { HomePage } from './Home/HomePage.jsx';
import { ShopList } from './ListShop/ShopList.jsx';
import { DetailShop } from './DetailShop/DetailShop.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/ShopList",
//     element: <HomePage/>,
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<App/>}/>
        <Route path='/ShopList' element={<ShopList/>}/>
        <Route path='/DetailShop' element={<DetailShop/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
