> A web application that implements progressives enhancement (by working without any Javascript running on the client) using Next.js.


## Getting Started

First, you'll need to setup your dev environment. Create your own copy of `.env.sample` and add the values to connect to your PosgreSQL database, and the authentication info (that you will use to login).

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How it works

When JS is **enabled**, it works like your traditional SPA, making AJAX calls when the form are submitted.

When JS is **disabled**, it uses the browser native form attributes to post information on special Next.js API routes (aliases as actions in `next.config.js`) and using redirects to refresh the page. It's actually using the Web mechanisms : http (with redirections), cookies, and HTML elements (like form) instead of rebuilding thoses behaviours using JS.