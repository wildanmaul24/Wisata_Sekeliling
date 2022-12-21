import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import Event from './pages/Event';
import Destination from './pages/Destination';
import YourOrder from './pages/YourOrder';
import Todo from './pages/Todo';
import Footer from './element/Footer';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/event" element={<Event />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/yourorder" element={<YourOrder />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
