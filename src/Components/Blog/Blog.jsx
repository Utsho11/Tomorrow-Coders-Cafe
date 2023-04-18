import React from 'react';
import './Blog.css'
import vector1 from './img/Vector-1.png' 
import vector from './img/Vector.png'

const Blog = () => {
    return (
        <div className='blog'>
            <img className='bannerImage1' src={vector1}/>
            <div className='bannerBody'>
                <h2>BLOG</h2>
                <img className='bannerImage2' src={vector}/>
            </div>
            <div>
                <h2>When should you use context API ?</h2>
                <p><b>Ans:</b> Here are some scenarios where we might consider using the Context API: <br />
                    <li>Theming</li>
                    <li>User Authentication</li>
                    <li>Language localization</li>
                    <li>Redux Replacement</li> <br />In general, if we have data or state that needs to be accessible to multiple components at different levels of the component hierarchy, we might consider using the Context API. However, if we have a very small application or the data doesn't need to be accessed by many components, it might be simpler to just use props to pass the data down the component tree.</p>
                <h2>What is a custom hook ?</h2>
                <p><b>Ans: </b>A custom hook is a reusable function in React that contains stateful logic and can be shared between components. Custom hooks allow you to encapsulate common stateful logic into a single function that can be used across multiple components, making it easier to write reusable and modular code.Custom hooks can be very powerful and can help to make your code more modular and reusable. They allow you to encapsulate stateful logic in a single function that can be used across multiple components, reducing code duplication and making it easier to maintain and test your code.</p>
                <h2>What is useRef ?</h2>
                <p><b>Ans: </b>"useRef" is a hook in React that provides a way to persist a value between renders of a component. It returns a mutable ref object that can be used to store any mutable value, similar to an instance property on a class component. The ref object can be used to access the value of the referenced element or component directly.The useRef hook is commonly used to access the value of an input field or to store a reference to a DOM element. It can also be used to store any other mutable value, such as a timer ID, a previous state value, or a reference to a child component instance.</p>
                <h2>What is useMemo ?</h2>
                <p><b>Ans: </b>"useMemo" is a hook in React that allows you to memoize expensive computations and avoid unnecessary re-renders. It takes a function and a list of dependencies as arguments, and returns a memoized value that is only recomputed when one of the dependencies changes. Memoization is a technique where the results of a function call are cached and returned for the same input arguments. This can be useful when a function call is expensive or time-consuming, and the same input arguments are likely to be used multiple times.</p>
            </div>
        </div>
    );
};

export default Blog;