import { h } from 'preact';
import { Router, Link, Route } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import PDFUploadPage from '../components/pages/PDFUploadPage';
// import ReadingInterfacePage from './ReadingInterfacePage';
// import UserProfilePage from './UserProfilePage';

const App = () => (
  <div id="app">
    <Header />
    <Router>
      <Route path="/" component={PDFUploadPage} />
      {/* <Route path="/reading" component={ReadingInterfacePage} />
          <Route path="/profile" component={UserProfilePage} /> */}
    </Router>
  </div>
);

export default App;
