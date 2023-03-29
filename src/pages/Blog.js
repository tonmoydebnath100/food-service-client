import React from 'react';

const Blog = () => {
  return (
    <div>
      <div><h1 className='text-5xl text-center m-5'>Blog</h1></div>
      <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-2">
        <div className="collapse-title text-xl font-medium">
        difference between sql and nosql
        </div>
        <div className="collapse-content"> 
          <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
        </div>
        
      </div>
      <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-2">
        <div className="collapse-title text-xl font-medium">
        What is JWT, and how does it work?
        </div>
        <div className="collapse-content"> 
          <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>
        </div>
      </div>
      <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-2">
        <div className="collapse-title text-xl font-medium">
        What is the difference between javascript and NodeJS?
        </div>
        <div className="collapse-content"> 
          <p>JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.</p>
        </div>
      </div>
        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-2">
        <div className="collapse-title text-xl font-medium">
        How does NodeJS handle multiple requests at the same time?
        </div>
        <div className="collapse-content"> 
          <p>Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue . NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded.</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;