import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Greeting from './Greeting';

const App = () => (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<div>Hello World!</div>} />
        <Route path="/greeting" element={<Greeting />} />
      </Routes>
    </Router>
  </>
);

export default App;
