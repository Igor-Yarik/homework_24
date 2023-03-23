import './app.css';
import Header from './containers/header';
import Main from './containers/main';
import Sidebar from './containers/sidebar';

const App = () => {
  return (
    <div className="app">
      <div className="app_header">
        <Header />
      </div>
      <div className="app_main">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;