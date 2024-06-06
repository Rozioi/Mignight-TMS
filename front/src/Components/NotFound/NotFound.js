import React from 'react';
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="not-found-page">
      <img src="https://camo.githubusercontent.com/0914058ab95c16ab381b672373e23b8679c2cf8ca7d926eb25e2c4aeac876dd3/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f313035393538332f73637265656e73686f74732f343137313336372f636f64696e672d667265616b2e676966" alt="Coder at work" />
      <h1>Error 404: Page not found</h1>
      <p>Perhaps our programmer is already working on creating this page...</p>
      <p>In any case, we will try to fix it as soon as possible.</p>
      <p>Go back to the <a href="/">main page</a> or try to find something else.</p>
    </div>
  );
};

export default NotFound;