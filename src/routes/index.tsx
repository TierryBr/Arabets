import { Route, BrowserRouter, Routes } from 'react-router-dom';

import ScrollToTop from '../utils/ScrollToTop';
import Home from '../pages/Home';
import About from '../pages/About';
import Content from '../pages/Content';
import Query from '../pages/Query';

const routes = () => (
  <BrowserRouter>
    <ScrollToTop>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/content' element={<Content />} />
        <Route path='/query' element={<Query />} />
      </Routes>
    </ScrollToTop>
  </BrowserRouter>
);
export default routes;
