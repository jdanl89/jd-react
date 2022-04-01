import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Home from './components/pages/Home'
import Portfolio from './components/pages/Portfolio'
import PageNotFound from './components/pages/PageNotFound'
import Layout from './layout/Layout'

import './App.scss';

function App() {
  return (
    <div className="body-wrap">
      <Router>
        <Layout>
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/Portfolio' element={<Portfolio/>} />
            <Route path='*' element={<PageNotFound/>} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
