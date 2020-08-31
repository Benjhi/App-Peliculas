import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'

import List from './containers/List'

import 'bootswatch/dist/darkly/bootstrap.min.css';

const App = () => {
    return (
     <Fragment>
      <nav className="navbar navbar-white bg-dark border-bottom border-white">
        <a href="/" className="navbar-brand text-white">
          MovieApp
        </a>
      </nav>
      <main className="bg-dark">
        <div className="container">
          <List />
        </div>
      </main>
    </Fragment>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));

