
import './App.css';

import Header from './dashboard/header/header';
import Footer from './dashboard/footer/footer';
import Body from './dashboard/body/body';

function App() {
  return (
    <div className="App">

        <Header className="App-header" />

        <Body className="App-body" />

        <Footer className="App-footer" />

    </div>
  );
}

export default App;
