import Navbar from './Navbar';
import Landing from './Landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
            <Route
              exact
              path="/mist-github"
              element={<Redirect url={'https://github.com/oslabs-beta/mist'} />}
            />
            <Route
              exact
              path="/mist-medium"
              element={
                <Redirect
                  url={
                    'https://medium.com/@lrinkedewit/what-is-mist-3902e46f037c'
                  }
                />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
