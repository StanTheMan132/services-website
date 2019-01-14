import React, { Component } from 'react';
import {Pager} from 'react-bootstrap';
import './App.css';
import Home from './pages/home';
import Services from './pages/services';
import About from './pages/about';
import ReactPageScroller from 'react-page-scroller';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: 1 };
    this._pageScroller = null;
  }

  goToPage = (eventKey) => {
    this._pageScroller.goToPage(eventKey);
  };
  pageOnChange = (number) => {
    this.setState({currentPage: number});
  };

  getPagesNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i<=3; i++) {
      pageNumbers.push(
        <Pager.Item key={i} eventKey={i-1} onSelect={this.goToPage}>{i}</Pager.Item>
      )
    }

    return [...pageNumbers];
  };

  render() {

    const pageNumbers = this.getPagesNumbers();
    return (
      <React.Fragment>
        <ReactPageScroller ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange}>
          <Home />
          <Services/>
          <About/>
        </ReactPageScroller>
        <Pager className="pagination-additional-class" bsSize="large">
          {pageNumbers}
        </Pager>
      </React.Fragment>
    );
  }
}

export default App;
