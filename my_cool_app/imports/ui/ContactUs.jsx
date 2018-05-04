import React, { Component } from 'react';
import route from '/imports/routing/router.js';

export default class ContactUs extends Component {

  goHome = () => {
    route.go('/')
  }
  goAbout = () => {
    route.go('/about')
  }

  render() {
    return(
      <div>
        <h1>Our Contact Us page</h1>
        <p>It has all our contact information</p>
        <button onClick = {this.goHome}>Back Home</button>
        <button onClick = {this.goAbout}>About Thanos</button>
      </div>
    )
  }
}
