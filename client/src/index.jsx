import React from 'react';
import ReactDOM from 'react-dom';
import 'aframe';
import 'babel-polyfill'
import 'aframe-particle-system-component';
import VRStories from 'aframe-react-stories';
import mockData from './mockdata.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      friends: null,
      assets: [],
      inVRMode: true,
      //  for view count:
      dBProfileId: null,
      viewers: [],
      storyDBId: null,
      viewsButton: false
    };
  }
  
  assetsCallback(assets) {
    this.setState({ assets });
  }

  render () {
    return (
      <a-scene>
        <a-assets>
          {this.state.assets}
        </a-assets>
        <VRStories 
          user={mockData.user}
          friends={mockData.friends}
          autoPlayNext={false}
          autoPlayStart={false}
          enableAnimation={true}
          splashScreen={'/splash.jpg'}
          assetsCallback={this.assetsCallback.bind(this)}
          viewCallback={() => { return; }}
        />
      </a-scene>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));