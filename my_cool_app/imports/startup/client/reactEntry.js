import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import App from '../../ui/App.jsx';

//One way of doing Meteor.startup//

// Meteor.startup(() => {
//   render(<App/>, document.getElementById('render-target'));
// });

//Another Way of doing Meteor.startup

fn = () => {render(<App/>, document.getElementById('render-target'))}
Meteor.startup(fn);
