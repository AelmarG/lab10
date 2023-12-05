// src/App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <body>
      <div className="main">
        <h1>Welcome to Lab 10 C: Aelmar Gewarges</h1>

        <div className="container">
          <h3>How did I build this page you may ask?</h3>
          <p>
            The process was alright, if a little tedious, learning React.js was okay overall though.
          </p>

          <ol>
            <li>
              <b>Install Node.js:</b> This is a major step, which is covered below.
            </li>

            <li>
              <b>Write the HTML code for this site!:</b> Inside of the App.js file, I wrote my HTML code, which requried to appear like this. This included divisions, lists, headers, and alot of other intricacies to design this.
            </li>

            <li>
              <b>Host this page:</b> As the final step, I had to host what I had created. After some research, I decided to host on GitHub and used <a href="https://www.youtube.com/watch?v=2hM5viLMJpA" target="_blank" rel="noopener noreferrer">this tutorial</a> to help.
            </li>
          </ol>
        </div>
        <hr></hr>

        <div className="container">
          <h3>But how was React.js installed?</h3>
          <p>
            I followed <a href="https://kinsta.com/knowledgebase/install-react/" target="_blank" rel="noopener noreferrer">this tutorial</a>, a general overview is down below:
          </p>

          <div className="section-container">
            <div className="step-container">
              <h2>1. Download and install Node.js:</h2>
              <p>
                To use React.js, it requires you to install Node.js. You can download and install the latest version for you computer <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">from the offical site!</a>
              </p>
            </div>

            <div className="step-container">
              <h2>2. Install create react app:</h2>
              <p>
                Open Windows Powershell/Terminal/Putty (or any other command line) and type the command command <code>npm install -g create-react-app</code> to install the create react app, now you're able to use React.js!
              </p>
            </div>

            <div className="step-container">
              <h2>3. Create a new react project:</h2>
              <p>
                Enter this command: <code>npx create-react-app (name)</code> and replace <strong>(name)</strong> with the desired name of your project.
              </p>
            </div>

            <div className="step-container">
              <h2>4. Navigate to your project directory:</h2>
              <p>
                Enter the command: <code>cd projName</code> to navigate to the directory of your project!
              </p>
            </div>
            
            <div>
				Now you should be able to develop your project using React.js! :)
			</div>
			
          </div>
          
        </div>

        <hr></hr>

        <div className="container">
          <h3>Difficulties I encountered and how I solved them!</h3>
          <p>
            The process was fairly simple, the only issue was figuring out how to edit the files on the react directories, it took a little while but I figured it out, other than that everything was fine!
          </p>
        </div>
      </div>
    </body>
  );
}

export default App;

