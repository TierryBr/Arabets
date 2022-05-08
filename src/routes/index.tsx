import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Content from '../pages/Content';

const routes = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/content' element={<Content />} />
    </Routes>
  </BrowserRouter>
);
export default routes;
