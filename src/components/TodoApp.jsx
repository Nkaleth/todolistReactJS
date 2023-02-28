import { Routes, Route } from 'react-router-dom';

import Home from 'routes/Home';
import About from 'routes/About';
import Login from 'routes/Login';
import Profile from 'routes/Profile';
import NotMatch from 'routes/NotMatch';
import Layout from 'components/Layout';

const TodoApp = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route path="profile" element={<Profile />} />
      <Route path="*" element={<NotMatch />} />
    </Route>
  </Routes>
);
export default TodoApp;
