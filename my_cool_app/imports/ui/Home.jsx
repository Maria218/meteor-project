import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import Posts from '../api/blog/collections.js';

//In a component, you can only have one default
class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      desc: 'Default Value',
      title: 'Default Title'
    }
  }

  goContacts = () => {
    route.go('/contact')
  }

  goAbout = () => {
    route.go('/about')
  }

  getAllPosts=()=>{
    const mPosts = this.props.posts;
    return mPosts.map((post) => {
      return (
        <div key = {post._id}>
          <h1>{post.title}</h1>
          <p>{post.desc}</p>
        </div>
      )
    }
  );
  }

  handleSubmit=(e)=>{
    const post = {
      title: this.state.title,
      desc: this.state.desc
    }
    Meteor.call('posts.create', post)
    e.preventDefault();
  }

  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  handleDescChange = (e) => {
    this.setState({
      desc: e.target.value
    })
  }

  render() {
    return(
      <div className="App">
        <h2>Our homepage</h2>
        <button onClick = {this.goContacts}>Contact Us</button>
        <button onClick = {this.goAbout}>About Thanos</button>
        {this.getAllPosts()} <br /><br />

        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input type="text" onChange={this.handleTitleChange} value={this.state.title} />
          </label>
          <label>
            Description:
            <textarea placeholder="Description" value={this.state.desc} onChange={this.handleDescChange} />
          </label>
          <button type="submit">Submit</button>
        </form><br />

        <form>
          <label>
            Full Name: <br />
            <input type="text" placeholder="Name"/>
          </label><br />
          <label>
            Username:<br />
            <input type="text" placeholder="Email Address" />
          </label><br />
          <label>
            Email:<br />
            <input type="text" placeholder="Email Address" />
          </label><br />
          <label>
            Password:<br />
            <input type="text" />
          </label><br />
          <label>
            Confirm Password:<br />
            <input type="text" />
          </label><br />
          <label>
            Phone Number:<br />
            <input type="number" />
          </label><br /><br />
          <button type="submit">Join Us</button>
        </form>
        <br /><br /><br />

        <form>
          <label>
            Email or Username:<br />
            <input type="text" />
          </label><br />
          <label>
            Password:<br />
            <input type="text" />
          </label><br /><br />
          <button type="submit">Sign In</button>
        </form><br />
      </div>
    )
  }
}

export default withTracker(() => {
  return {
    posts : Posts.find().fetch(),
  }
})(Home);
