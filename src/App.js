import React from 'react';

function App() {
  return (
    <div>
      <nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" style={{ background: 'black' }} id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll" href="#page-top">Aravind S</a>
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault"
            aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link js-scroll active" href="#home">Intro</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div id="home" className="intro route" style={{background:'#F64C72'}}>
        <div className="overlay-intro"></div>
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">I am Aravind S</h1>
              <p className="intro-subtitle"><span>Avid Web, Desktop and Mobile Developer</span></p>
              <br />
              <br />
              <br />
              <h1 className="intro-title mb-4">Caffeine Under Work! <span role="img" aria-label="Coffee">☕</span></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
