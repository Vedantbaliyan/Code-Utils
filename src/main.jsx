import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HashRouter,BrowserRouter, Route ,Routes} from "react-router";
import Layout from './Layout';
import Home from './Home/Home.jsx';
import Password from './Password/Password.jsx'
import Currency from './Currency/Currency.jsx'
import About from './About/About.jsx';


createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='password' element={<Password/>}/>
        <Route path='currency' element={<Currency/>}/>
        <Route path='about' element={<About/>}/>
      </Route>
    </Routes>
  </HashRouter>,
)
