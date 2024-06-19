<body>
    <header>
        <h1>React.js Daily Progress</h1>
        <p>This repository documents my daily progress and learning journey in React.js. Each day, I will commit the new concepts I've learned, projects I've worked on, and any other relevant details.</p>
    </header>
    <nav>
        <h2>Table of Contents</h2>
        <ul>
            <li><a href="#introduction">Introduction</a></li>
            <li><a href="#daily-progress">Daily Progress</a></li>
             </ul>
    </nav>
    <section id="introduction" class="section">
        <h2>Introduction</h2>
        <p>Welcome to my React.js learning journey! This repository is a personal log where I will track my progress as I dive into the world of React.js. My goal is to become proficient in building modern web applications using React.</p>
    </section>
    <section id="daily-progress" class="section">
        <h2>Daily Progress</h2>
        <p>Here, I will list my daily updates. Each day will have its own entry detailing what I learned, challenges faced, and any code snippets or examples that illustrate my progress.</p>
        <h2>Day-1</h2>
        <ul>
            <li>Learned about the basic of react why we need react</li>
            <li>How does the structure of react works</li>
            <li>Learned about the concepts of hooks in react</li>
            <li>Very usefull when we need to change the same variable in different parts in UI</li>

 ```
            import { useState } from 'react'
 ```
```
            let [value,method_of_the_same_value ]=useState(defaultvalue)
```
<li>Key features of fiber is the ablity to pause, abort or resuse work</li>
             </ul>
        <h2>Day-2</h2>
        <ul>
          <li>Made a simple counter project to learn about the states in React</li>
          <li>also made a background changer using the same property</li>
          <li>Learned about the proprs in React and how we can use the same components different places with different values</li>
          <li>useCallback is a react hook that lets us cache function definition between re-renders</li>
             </ul>
        <h2>Day-3</h2>
         <ul>
          <li>Made a Password generator </li>
          <li>using the useRef useCallback, useState, and useEffect</li>
             </ul>
        <h2>Day-4</h2>
        <ul>
        <li>Learned more about customs hooks and router in react</li>
           
  ``` function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://api.github.com/users/vaibhavkothari33")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setData[data]
            })
    }, [])
```
```
export const githubInfoLoader = async()=>{
    const responce = await fetch("https://api.github.com/users/vaibhavkothari33")
    return responce.json()
}
```

        
```
import { useParams } from 'react-router-dom'
```

this is use to get user data from the url like after a particular route
user/vaibhav
```
import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid}=useParams()
  return (
    <div>User: {userid}</div>
  )
}

export default User
```

      
</body>
</html>
