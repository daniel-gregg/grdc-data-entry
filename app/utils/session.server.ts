import {createCookieSessionStorage } from '@remix-run/node'

// export the whole sessionStorage object
export let sessionStorage = createCookieSessionStorage({
    cookie: {
        name: '_session',
        sameSite: 'lax', //this helps with CSRF
        path: '/', //allows the cookie to work in all routes
        httpOnly: true, //for security
        secrets: ['s3cr3t'], //REPLACE WITH ACTUAL SECRET ON DB
        secure: process.env.NODE_ENV === 'production' //enable in production only
    }
})

//can also export individual elements to allow usage in other code
//export let { getSession, commitSession, destroySession } = sessionStorage