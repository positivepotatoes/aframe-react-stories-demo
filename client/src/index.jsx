import React from 'react';
import ReactDOM from 'react-dom';
import 'aframe';
import 'babel-polyfill'
import 'aframe-animation-component';
import 'aframe-mouse-cursor-component';
import Stories from 'aframe-react-stories';
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
      <div style={{ position:'absolute', height: '100%', width: '100%' }}>
        <a-scene>
          <a-assets>
            {this.state.assets}
          </a-assets>
          <Stories
            user={mockData.user}
            friends={mockData.friends}
            autoPlayNext={false}
            autoPlayStart={false}
            enableAnimation={true}
            splashScreen={'/assets/0_splash.jpg'}
            assetsCallback={this.assetsCallback.bind(this)}
            viewCallback={() => { return; }}
          />
          <a-entity camera look-controls mouse-cursor/>
        </a-scene>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));