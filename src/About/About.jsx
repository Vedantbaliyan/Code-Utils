import React from 'react'

function About() {
    return (
      <div className="flex flex-col justify-center items-center text-3xl w-screen p-4">
        <h1 className='font-extrabold'>About Me</h1>
        <br />
        <p>
          Hi, I'm <strong>Vedant Baliyan</strong>, currently pursuing a B.Tech in Computer Science 
          from <strong>Galgotias College of Engineering and Technology</strong>. 
        </p>
        <br />
        <p>
          This is my first project in <strong>React</strong>, where I explored different mechanisms of React such as  
          <strong> State Management</strong> and various hooks like <strong>useState</strong>, <strong>useCallback</strong>, 
          <strong>useEffect</strong>, <strong>useRef</strong>, and more. I also implemented 
          <strong> React Router</strong> properly in this project to enable smooth navigation.
        </p>
      </div>
    );
  }
  
  export default About;
