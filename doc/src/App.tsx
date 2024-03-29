import React, {useEffect} from 'react';
import {HelpUs} from "./ui";
import {MenuApp} from "./menu";
import {Routers} from "./routers";
import { HashRouter as Router } from "react-router-dom";

const App = () => {

  const getStars = async () => {
    const result = await fetch("https://api.github.com/repos/nickorsk2017/formMOD")
    .then(res => res.json()) // node-fetch option to transform to json
    .then(json => {
      // prune the data to return only what we want
      return {
        stargazers: json.stargazers_count
      };
    });
    console.log(result, 'result');
  }

  useEffect(() => {
    getStars();
  }, []);
 
  return (
  <Router>
      <>
        <MenuApp/>
        <div id="appContainer">
          <span className="super-github">
            <a target='_blank' className='super-github-star' href="https://github.com/nickorsk2017/formMOD">
              <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>
              Set star
            </a>
            <a className="super-github-icon" href="https://github.com/nickorsk2017/formMOD"><i className="fab fa-github"></i></a>
          </span>
          <HelpUs/>
          
          <Routers/>
        </div>
      </>
  </Router>)
}

export default App;
