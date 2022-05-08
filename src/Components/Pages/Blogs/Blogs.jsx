import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='blogs md:container md:mx-auto mx-4 text-left my-10'>
            <div className='mb-3'>
                <h1 className='text-3xl'>Difference between javascript and nodejs?</h1>
                <p className='mt-2'><span className='text-green-700 '>Answer:</span>
                <br />
                1. Javascript is a programming language that is used for writing scripts on the website. but nodejs is a javascript runtime environment.
                <br />
                2. Javascript can only be run in the browsers.but We can run Javascript outside the browser with the help of NodeJS.
                <br />
                3. javascript is high level programming language but node js not a programming language,it just javascript server site run time environment and it works to backend
                </p>
            </div>
            <div className='mb-3'>
                <h1 className='text-3xl'> When should you use nodejs and when should you use mongodb?</h1>
                <p className='mt-2'><span className='text-green-700 '>Answer:</span>
                <br />
                1. different: Node js is javascript code base runtime environment and mongodb is the document oriented database.
                <br />
                2. if you json type of data using your development you should be use to mongodb and if you love to javascript you should be use node.js runtime
                <br />
                3. Node js and mongodb database are working faster.MongoDB's performance is much faster than any RDBMS.if you are a junior developer you must be use to them.
                </p>
            </div>
            <div>
                <h1 className='text-3xl'> What is the purpose of jwt and how does it work?</h1>
                <p className='mt-2'><span className='text-green-700 '>Answer:</span>
                <br />
                1. jwt is json web token. JWT, or JSON Web Token, is an open standard used to share security information between two parties.
                <br />
                2. A client and a server.Each JWT contains encoded json object,including a set of claims.JWT are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                <br />
                3. A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
                <br />
                1. header and payload/my data <br />
                2.signature/my secret code.
                </p>
            </div>
        </div>
    );
};

export default Blogs;