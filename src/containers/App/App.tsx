import * as React from 'react';
import './app.scss';
import Header from 'src/componets/header/header'
import Footer from 'src/componets/footer/footer';

class App extends React.Component {
  public render() {
    return (
      <div className="app">

        <Header />

        <div className="app-content">
          haha
        </div>
        
        <Footer />
        
      </div>

    );
  }
}

export default App