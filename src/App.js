import Navbar from './Navbar';
import Landing from './Landing';
import Home from './Home';
import laser from './audio/heat-vision.mp3';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import Redirect from './Redirect';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Landing />} />
            {/*<Route exact path="/" element={<Home />} />*/}
            {/* <Route exact path="/work" element={<Work />} /> */}
            <Route exact path="/create" element={<Create />} />
            <Route exact path="/blogs/:id" element={<BlogDetails />} />
            <Route path="*" element={<NotFound />} />
            <Route
              exact
              path="/linkedin"
              element={
                <Redirect url={'https://www.linkedin.com/in/ericrogerlemay/'} />
              }
            />
            <Route
              exact
              path="/github"
              element={<Redirect url={'https://github.com/StygianLiege'} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
