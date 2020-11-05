import React from 'react';
import Video from './Components/Video'


function App() {
  return (
    <div className="App">
      <React.Fragment>
        <div className="container ">
          <div className="row">
            <h1 className="text-center">My Videos</h1>
            <div className="col-md-6">
              <Video 
              url="https://www.youtube.com/embed/SMQOv_NT6WE"
              title="Things I Wish I Knew When I Started Programming"
              />

            </div>
            <div className="col-md-6">
              <Video 
              url="https://www.youtube.com/embed/YVDLNFEuvEI"
              title="Orderly Dissolution of the United States into Its Component Parts"
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
}

export default App;
