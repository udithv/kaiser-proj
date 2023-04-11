import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Storybook from './pages/Storybook/Storybook';
import Home from './pages/Home/Home';

import Layout from './components/Layout/Layout';
import ViewOnGithub from './components/ViewOnGithub/ViewOnGithub';



function App() {
  return (
    <div className="App">
      <ViewOnGithub />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="storybook" element={<Storybook />} />
          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
