import Navbar from './Navbar';
import Landing from './Landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
