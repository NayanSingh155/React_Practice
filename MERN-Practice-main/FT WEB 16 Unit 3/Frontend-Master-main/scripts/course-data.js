let all_courses = [
  {
    title: "Build a Fullstack App from Scratch (feat Next.js)",
    profile:
      "https://static.frontendmasters.com/assets/teachers/moss/thumb.webp",
    name: "Scott Moss",
    org: "Netflix",
    desc: "The best way to learn is to build something. Follow along and code a Spotify clone from scratch. From design spec to deployment using React, Next.js, Typescript, and Postgres.",
    time: "9 hours, 6 minutes ",
    bg: "https://static.frontendmasters.com/assets/courses/2022-03-15-fullstack-app-next/thumb.webp",
    popular: false,
    video: "https://www.youtube.com/watch?v=9htqRMWglFY",
    description:
      "Learn by coding through a fun, project-based course full real-world design problems from front-end to back-end. You’ll build a music app with features like playlists, audio player, shuffle, and more! Use a modern stack of tools: React, Next.js, Typescript, and Postgres. Code reusable UI components, database schemas and migrations, API calls with serverless functions, and deploy it for the world to see!This course and others like it are available as part of our Frontend Masters video subscription.",
    publish: "Published: March 15, 2022",
  },
  {
    title: "Testing Web Apps with Cypress",
    profile:
      "https://static.frontendmasters.com/assets/teachers/kinney/thumb.webp",
    name: "Steve Kinney",
    org: "Temporal",
    desc: "Cypress is the fastest and easiest way to write end-to-end tests for your client-side applications. Learn the selector engine, test runners, assertion library, and write your own custom commands.",
    time: "4 hours, 41 minutes",
    bg: "https://static.frontendmasters.com/assets/courses/2022-03-08-cypress/thumb.webp",
    popular: false,
    video: "https://www.youtube.com/watch?v=qGl2XsuZHWY&t=11s",
    description:
      "Cypress is the fastest and easiest way to write end-to-end tests for your client-side applications. Learn the selector engine, test runners, assertion library, and write your own custom commands. Seed your database using Tasks in Node.js, and mock and stub out network requests, so you're not relying on external APIs that you don't control. Finally, integrate your Cypress tests with your CI/CD pipeline using GitHub Actions!This course and others like it are available as part of our Frontend Masters video subscription.",
    publish: "Published: March 8, 2022",
  },
  {
    title: "AWS For Front-End Engineers, v2",
    profile:
      "https://static.frontendmasters.com/assets/teachers/kinney/thumb.webp",
    name: "Steve Kinney",
    org: "Temporal",
    desc: "Build an enterprise-grade deployment infrastructure on AWS using S3, Route 53, CloudFront, lambda@edge, and more!",
    time: "3 hours, 40 minutes ",
    bg: "https://static.frontendmasters.com/assets/courses/2022-03-01-aws-v2/thumb.webp",
    popular: true,
    video: "https://www.youtube.com/watch?v=qGl2XsuZHWY&t=11s",
    description:
      "Steve is the front-end architect at Temporal. Previously, he was the front-end architect at Twilio and SendGrid. He is the director emeritus and founder of the front-end engineering program at the Turing School for Software and Design in Denver, Colorado — a non-profit developer training program. In a previous life, Steve was a New York City public school teacher. He taught special education and web development in Manhattan, Brooklyn, and Queens. He currently lives in Denver, Colorado",
    publish: "Published: March 8, 2022",
  },
  {
    title: "A Tour of Web 3: Ethereum & Smart Contracts with Solidity",
    profile:
      "	https://static.frontendmasters.com/assets/teachers/theprimeagen/thumb.webp",
    name: "ThePrimeagen",
    org: "Netflix",
    desc: "Web 3 (DApp) applications could change the development landscape. Learn to create and deploy smart contracts on Ethereum with Solidity. Then tackle challenging concepts such as memory layout, delegate calls, and fallback functions.",
    time: "4 hours, 57 minutes ",
    bg: "https://static.frontendmasters.com/assets/courses/2022-02-10-web3-smart-contracts/thumb.webp",
    popular: false,
    video: "https://www.youtube.com/watch?v=zXrhhYLah20",
    description:
      "Web 3 (DApp) applications could change the development landscape. Learn to create and deploy smart contracts on Ethereum with Solidity. Then communicate from them to Node.js and browsers. You'll tackle challenging concepts such as memory layout, delegate calls, and fallback functions. Lastly, implement the diamond pattern, allowing you to create smart contracts of arbitrary size.This course and others like it are available as part of our Frontend Masters video subscription.",
    publish: "Published: February 10, 2022",
  },
  {
    title: "Rapid Application Development with Code Generation",
    profile:
      "https://static.frontendmasters.com/assets/teachers/ruebbelke/thumb.webp",
    name: "Lukas Ruebbelke",
    org: "Venmo",
    desc: "Learn to build a fully capable code generation engine using basic string manipulation. You’ll learn practical techniques and examples of accelerated development using CLIs, live templates, helpful libraries, and tooling.",
    time: "3 hours, 48 minutes ",
    bg: "	https://static.frontendmasters.com/assets/courses/2022-02-02-rapid-app-dev/thumb.webp",
    popular: false,
    video: "https://www.youtube.com/watch?v=5B2c9KZ5pRs",
    description:
      "What would it mean for you in your career if you could develop applications faster than you have been? Re-imagine the traditional software development process and approach while building a fully capable code generation engine using basic string manipulation. You’ll learn practical techniques and examples of accelerated development using CLIs, live templates, helpful libraries, and tooling.This course and others like it are available as part of our Frontend Masters video subscription.",
    publish: "Published: February 2, 2022",
  },
  {
    title: "Angular 13 Fundamentals",
    profile:
      "https://static.frontendmasters.com/assets/teachers/ruebbelke/thumb.webp",
    name: "Lukas Ruebbelke",
    org: "Venmo",
    desc: "Learn Angular through building an app with real-world features! We start off using the Angular CLI to get set up quickly. Then we'll move on to Angular core concepts like components, templates, routing, forms, server-side communication, and more.",
    time: "6 hours, 52 minutes ",
    bg: "https://static.frontendmasters.com/assets/courses/2022-02-01-angular-13/thumb.webp",
    popular: true,
    video: "https://www.youtube.com/watch?v=5B2c9KZ5pRs",
    description:
      "This course is great for any developer looking to learn Angular through building an app with real-world features! We start off using the Angular CLI to get set up quickly. Then we'll learn Angular core concepts like components, templates, routing, forms, server-side communication, and more. By the end of this course, you'll have learned how to build a complete application from start to finish and have the skills to go out into the world and build your own!This course and others like it are available as part of our Frontend Masters video subscription.",
    publish: "Published: February 1, 2022",
  },
  {
    title: "Rx.js Fundamentals",
    profile:
      "https://static.frontendmasters.com/assets/teachers/kinney/thumb.webp",
    name: "Steve Kinney",
    org: "Temporal",
    desc: "Learn the foundation of Rx.js by creating an observable from scratch, manipulate data arriving over time with Rx.js operators, and build up to orchestrating multiple API requests to craft complex asynchronous experiences.",
    time: "3 hours, 57 minutes ",
    bg: "https://static.frontendmasters.com/assets/courses/2022-01-25-rx-js/thumb.webp",
    popular: true,
    video: "https://www.youtube.com/watch?v=5B2c9KZ5pRs",
    description:
      "This course is great for any developer looking to learn Angular through building an app with real-world features! We start off using the Angular CLI to get set up quickly. Then we'll learn Angular core concepts like components, templates, routing, forms, server-side communication, and more. By the end of this course, you'll have learned how to build a complete application from start to finish and have the skills to go out into the world and build your own!This course and others like it are available as part of our Frontend Masters video subscription.",
    publish: "Published: February 1, 2022",
  },
  {
    title: "Build Progressive Web Apps (PWAs) from Scratch",
    profile:
      "https://static.frontendmasters.com/assets/teachers/firtman/thumb.webp",
    name: "Maximiliano Firtman",
    org: "Independent Consultant",
    desc: "Build offline-capable Progressive Web Apps with HTML, CSS, and JavaScript: Service workers give you access to the cache storage while App Manifests allow you to be distributed on the Google Play store and Apple App Store.",
    time: "3 hours, 48 minutes ",
    bg: "https://static.frontendmasters.com/assets/courses/2022-01-11-pwas/thumb.webp",
    popular: false,
    video: "https://www.youtube.com/watch?v=5B2c9KZ5pRs",
    description:
      "This course is great for any developer looking to learn Angular through building an app with real-world features! We start off using the Angular CLI to get set up quickly. Then we'll learn Angular core concepts like components, templates, routing, forms, server-side communication, and more. By the end of this course, you'll have learned how to build a complete application from start to finish and have the skills to go out into the world and build your own!This course and others like it are available as part of our Frontend Masters video subscription.",
    publish: "Published: February 1, 2022",
  },
  {
    title: "State Machines in JavaScript with XState, v2",
    profile:
      "	https://static.frontendmasters.com/assets/teachers/khourshid/thumb.webp",
    name: "David Khourshid",
    org: "Microsoft",
    desc: "Learn the fundamentals of state machines and statecharts. You'll build state machines without any libraries in pure JavaScript, then use XState to take advantage of a wide variety of other features.",
    time: "4 hours, 8 minutes ",
    bg: "https://static.frontendmasters.com/assets/courses/2021-12-21-xstate-v2/thumb.webp",
    popular: true,
    video: "https://www.youtube.com/watch?v=5B2c9KZ5pRs",
    description:
      "This course is great for any developer looking to learn Angular through building an app with real-world features! We start off using the Angular CLI to get set up quickly. Then we'll learn Angular core concepts like components, templates, routing, forms, server-side communication, and more. By the end of this course, you'll have learned how to build a complete application from start to finish and have the skills to go out into the world and build your own!This course and others like it are available as part of our Frontend Masters video subscription.",
    publish: "Published: February 1, 2022",
  },
  {
    title: "Getting Started with CSS",
    profile:
      "https://static.frontendmasters.com/assets/teachers/kramer/thumb.webp",
    name: "Jen Kramer",
    org: "Freelance Instructor",
    desc: "Get to know CSS in the right way without the fluff. You'll style text, build navigation bars, headers/footers, add icons, and more. You'll even build a professional portfolio website by the end of the course!",
    time: "3 hours, 19 minutes ",
    bg: "https://static.frontendmasters.com/assets/courses/2021-12-14-getting-started-css/thumb.webp",
    popular: true,
    video: "https://www.youtube.com/watch?v=5B2c9KZ5pRs",
    description:
      "This course is great for any developer looking to learn Angular through building an app with real-world features! We start off using the Angular CLI to get set up quickly. Then we'll learn Angular core concepts like components, templates, routing, forms, server-side communication, and more. By the end of this course, you'll have learned how to build a complete application from start to finish and have the skills to go out into the world and build your own!This course and others like it are available as part of our Frontend Masters video subscription.",
    publish: "Published: February 1, 2022",
  },
  {
    title: "Web Audio Synthesis & Visualization",
    profile:
      "	https://static.frontendmasters.com/assets/teachers/deslauriers/thumb.webp",
    name: "Matt DesLauriers",
    org: "Freelancer",
    desc: "Learn to create sounds using nothing but code! Synthesize and visualize audio, and add fun effects with JavaScript. Use these skills to build audio into games, web applications, or even art projects in the browser.",
    time: "3 hours, 2 minutes ",
    bg: "https://static.frontendmasters.com/assets/courses/2021-12-07-web-audio/thumb.webp",
    popular: true,
    video: "https://www.youtube.com/watch?v=5B2c9KZ5pRs",
    description:
      "This course is great for any developer looking to learn Angular through building an app with real-world features! We start off using the Angular CLI to get set up quickly. Then we'll learn Angular core concepts like components, templates, routing, forms, server-side communication, and more. By the end of this course, you'll have learned how to build a complete application from start to finish and have the skills to go out into the world and build your own!This course and others like it are available as part of our Frontend Masters video subscription.",
    publish: "Published: February 1, 2022",
  },
  {
    title: "Web UX Design for High Converting Websites",
    profile:
      "	https://static.frontendmasters.com/assets/teachers/boag/thumb.webp",
    name: "Paul Boag",
    org: "Boagworld",
    desc: "Can a website that encourages users to act be created without dark patterns? Well, it turns out, yes, it can! Learn to make websites more engaging through good design, fascinating content, and solid UX in this course by Paul Boag.",
    time: "4 hours, 49 minutes  ",
    bg: "https://static.frontendmasters.com/assets/courses/2021-11-23-ux-design-principles/thumb.webp",
    popular: false,
    video: "https://www.youtube.com/watch?v=5B2c9KZ5pRs",
    description:
      "This course is great for any developer looking to learn Angular through building an app with real-world features! We start off using the Angular CLI to get set up quickly. Then we'll learn Angular core concepts like components, templates, routing, forms, server-side communication, and more. By the end of this course, you'll have learned how to build a complete application from start to finish and have the skills to go out into the world and build your own!This course and others like it are available as part of our Frontend Masters video subscription.",
    publish: "Published: February 1, 2022",
  },
  {
    title: "Dynamic CSS with Custom Properties (aka CSS Variables)",
    profile:
      "https://static.frontendmasters.com/assets/teachers/verou/thumb.webp",
    name: "Lea Verou",
    org: "MIT",
    desc: "Create reusable components without any JavaScript dependencies needed – with only vanilla CSS! Learn how to leverage Custom Properties to improve code reuse, maintainability, and downright enable possibilities that previously required large amounts of hard-to-maintain JavaScript and violated the separation of concerns.",
    time: "3 hours, 54 minutes ",
    bg: "https://static.frontendmasters.com/assets/courses/2021-11-09-css-variables/thumb.webp",
    popular: false,
    video: "https://www.youtube.com/watch?v=5B2c9KZ5pRs",
    description:
      "This course is great for any developer looking to learn Angular through building an app with real-world features! We start off using the Angular CLI to get set up quickly. Then we'll learn Angular core concepts like components, templates, routing, forms, server-side communication, and more. By the end of this course, you'll have learned how to build a complete application from start to finish and have the skills to go out into the world and build your own!This course and others like it are available as part of our Frontend Masters video subscription.",
    publish: "Published: February 1, 2022",
  },
  {
    title: "Intermediate React Native",
    profile:
      "https://static.frontendmasters.com/assets/teachers/kraman/thumb.webp",
    name: "Kadi Kraman",
    org: "Formidable",
    desc: "Learn how to persist data across app launches, add images to your React Native app, use gestures, add animations and much more!",
    time: "4 hours, 18 minutes ",
    bg: "https://static.frontendmasters.com/assets/courses/2021-11-02-intermediate-react-native/thumb.webp",
    popular: true,
    video: "https://www.youtube.com/watch?v=5B2c9KZ5pRs",
    description:
      "This course is great for any developer looking to learn Angular through building an app with real-world features! We start off using the Angular CLI to get set up quickly. Then we'll learn Angular core concepts like components, templates, routing, forms, server-side communication, and more. By the end of this course, you'll have learned how to build a complete application from start to finish and have the skills to go out into the world and build your own!This course and others like it are available as part of our Frontend Masters video subscription.",
    publish: "Published: February 1, 2022",
  },
  {
    title: "CSS Grid & Flexbox for Responsive Layouts, v2",
    profile:
      "https://static.frontendmasters.com/assets/teachers/kramer/thumb.webp",
    name: "Jen Kramer",
    org: "Freelance Instructor",
    desc: "Learn the essential CSS layout techniques for building responsive, beautiful websites. You'll use CSS Grid and Flexbox along with responsive images to build out real-world web layouts!",
    time: "5 hours, 49 minutes ",
    bg: "https://static.frontendmasters.com/assets/courses/2021-10-26-css-grid-flexbox-v2/thumb.webp",
    popular: true,
    video: "https://www.youtube.com/watch?v=5B2c9KZ5pRs",
    description:
      "This course is great for any developer looking to learn Angular through building an app with real-world features! We start off using the Angular CLI to get set up quickly. Then we'll learn Angular core concepts like components, templates, routing, forms, server-side communication, and more. By the end of this course, you'll have learned how to build a complete application from start to finish and have the skills to go out into the world and build your own!This course and others like it are available as part of our Frontend Masters video subscription.",
    publish: "Published: February 1, 2022",
  },
  {
    title: "Developer Productivity",
    profile:
      "https://static.frontendmasters.com/assets/teachers/theprimeagen/thumb.webp",
    name: "ThePrimeagen",
    org: "Netflix",
    desc: "Build a pro dev workflow that will increase your productivity across multiple machines, projects, and technologies. Setup your computer quickly with Ansible, use git worktrees, save time using tmux, and other tools that can help you be more productive.",
    time: "4 hours, 17 minutes ",
    bg: "https://static.frontendmasters.com/assets/courses/2021-10-19-developer-productivity/thumb.webp",
    popular: false,
    video: "https://www.youtube.com/watch?v=5B2c9KZ5pRs",
    description:
      "This course is great for any developer looking to learn Angular through building an app with real-world features! We start off using the Angular CLI to get set up quickly. Then we'll learn Angular core concepts like components, templates, routing, forms, server-side communication, and more. By the end of this course, you'll have learned how to build a complete application from start to finish and have the skills to go out into the world and build your own!This course and others like it are available as part of our Frontend Masters video subscription.",
    publish: "Published: February 1, 2022",
  },
  {
    title: "Complete Intro to Real-Time",
    profile:
      "https://static.frontendmasters.com/assets/teachers/holt/thumb.webp",
    name: "Brian Holt",
    org: "Stripe",
    desc: "Build apps where the client can push messages to the server and talk in real-time! You’ll start by learning long polling with Vanilla JavaScript and Node.js, then open web sockets by hand, and finally, you’ll learn some excellent web socket abstractions with SocketIO. You’ll learn back off and retry strategies along the way, as well as use HTTP2 push in the browser!",
    time: "3 hours, 25 minutes ",
    bg: "https://static.frontendmasters.com/assets/courses/2021-10-08-realtime/thumb.webp",
    popular: false,
    video: "https://www.youtube.com/watch?v=5B2c9KZ5pRs",
    description:
      "This course is great for any developer looking to learn Angular through building an app with real-world features! We start off using the Angular CLI to get set up quickly. Then we'll learn Angular core concepts like components, templates, routing, forms, server-side communication, and more. By the end of this course, you'll have learned how to build a complete application from start to finish and have the skills to go out into the world and build your own!This course and others like it are available as part of our Frontend Masters video subscription.",
    publish: "Published: February 1, 2022",
  },
  {
    title: "Intermediate Gatsby, v2",
    profile:
      "	https://static.frontendmasters.com/assets/teachers/lengstorf/thumb.webp",
    name: "Jason Lengstorf",
    org: "Netlify",
    desc: "Use Gatsby’s APIs to handle advanced use cases like handling custom data and dynamic pages, client-only routes and protected routes, and customizing Gatsby’s schema and GraphQL API data.",
    time: "3 hours, 54 minutes ",
    bg: "https://static.frontendmasters.com/assets/courses/2021-09-23-intermediate-gatsby-v2/thumb.webp",
    popular: false,
    video: "https://www.youtube.com/watch?v=5B2c9KZ5pRs",
    description:
      "This course is great for any developer looking to learn Angular through building an app with real-world features! We start off using the Angular CLI to get set up quickly. Then we'll learn Angular core concepts like components, templates, routing, forms, server-side communication, and more. By the end of this course, you'll have learned how to build a complete application from start to finish and have the skills to go out into the world and build your own!This course and others like it are available as part of our Frontend Masters video subscription.",
    publish: "Published: February 1, 2022",
  },
  {
    title: "Introduction to Gatsby, v2",
    profile:
      "	https://static.frontendmasters.com/assets/teachers/lengstorf/thumb.webp",
    name: "Jason Lengstorf",
    org: "Netlify",
    desc: "Code a full blog web app in Gatsby. Use GraphQL in Gatsby for storing and retrieving data, create pages and posts with MDX, optimize your images automatically with the gatsby-image, and deploy your brand new blog website to Netlify!",
    time: "4 hours, 4 minutes ",
    bg: "https://static.frontendmasters.com/assets/courses/2021-09-21-gatsby-v2/thumb.webp",
    popular: true,
    video: "https://www.youtube.com/watch?v=5B2c9KZ5pRs",
    description:
      "This course is great for any developer looking to learn Angular through building an app with real-world features! We start off using the Angular CLI to get set up quickly. Then we'll learn Angular core concepts like components, templates, routing, forms, server-side communication, and more. By the end of this course, you'll have learned how to build a complete application from start to finish and have the skills to go out into the world and build your own!This course and others like it are available as part of our Frontend Masters video subscription.",
    publish: "Published: February 1, 2022",
  },
  {
    title: "Intermediate TypeScript",
    profile:
      "https://static.frontendmasters.com/assets/teachers/north/thumb.webp",
    name: "Mike North",
    org: "LinkedIn",
    desc: "TypeScript adds a powerful type system on top of your JavaScript to catch bugs before they happen and provide a superior developer experience for collaborative teams.",
    time: "2 hours, 48 minutes ",
    bg: "https://static.frontendmasters.com/assets/courses/2021-08-04-intermediate-typescript/thumb.webp",
    popular: true,
    video: "https://www.youtube.com/watch?v=5B2c9KZ5pRs",
    description:
      "This course is great for any developer looking to learn Angular through building an app with real-world features! We start off using the Angular CLI to get set up quickly. Then we'll learn Angular core concepts like components, templates, routing, forms, server-side communication, and more. By the end of this course, you'll have learned how to build a complete application from start to finish and have the skills to go out into the world and build your own!This course and others like it are available as part of our Frontend Masters video subscription.",
    publish: "Published: February 1, 2022",
  },
  {
    title: "TypeScript Fundamentals, v3",
    profile:
      "https://static.frontendmasters.com/assets/teachers/north/thumb.webp",
    name: "Mike North",
    org: "LinkedIn",
    desc: "TypeScript adds a powerful type system on top of your JavaScript to catch bugs before they happen and provide a superior developer experience for collaborative teams.",
    time: "4 hours, 27 minutes ",
    bg: "https://static.frontendmasters.com/assets/courses/2021-08-03-typescript-v3/thumb.webp",
    popular: false,
    video: "https://www.youtube.com/watch?v=5B2c9KZ5pRs",
    description:
      "This course is great for any developer looking to learn Angular through building an app with real-world features! We start off using the Angular CLI to get set up quickly. Then we'll learn Angular core concepts like components, templates, routing, forms, server-side communication, and more. By the end of this course, you'll have learned how to build a complete application from start to finish and have the skills to go out into the world and build your own!This course and others like it are available as part of our Frontend Masters video subscription.",
    publish: "Published: February 1, 2022",
  },
  {
    title: "Introduction to Node.js, v2",
    profile:
      "	https://static.frontendmasters.com/assets/teachers/moss/thumb.webp",
    name: "Scott Moss",
    org: "Netflix",
    desc: "Transfer your JavaScript skills to the server-side and level up to a full-stack engineer! By learning the foundations of Node.js, you’ll be able to do a lot more with JavaScript, like creating command-line interfaces and APIs, and interacting with the file system.",
    time: "4 hours, 51 minutes ",
    bg: "https://static.frontendmasters.com/assets/courses/2021-07-20-node-js-v2/thumb.webp",
    popular: true,
    video: "https://www.youtube.com/watch?v=5B2c9KZ5pRs",
    description:
      "This course is great for any developer looking to learn Angular through building an app with real-world features! We start off using the Angular CLI to get set up quickly. Then we'll learn Angular core concepts like components, templates, routing, forms, server-side communication, and more. By the end of this course, you'll have learned how to build a complete application from start to finish and have the skills to go out into the world and build your own!This course and others like it are available as part of our Frontend Masters video subscription.",
    publish: "Published: February 1, 2022",
  },
  {
    title: "Complete Intro to Computer Science",
    profile:
      "https://static.frontendmasters.com/assets/teachers/holt/thumb.webp",
    name: "Brian Holt",
    org: "Stripe",
    desc: "Even without a traditional computer science background, you’ll be able to learn big computer science topics: Algorithms and Big O Analysis, Recursion, Sorting, Data Structures, AVL Trees, Binary Search Trees, Tree Traversals, and Path Finding.",
    time: "8 hours, 59 minutes ",
    bg: "https://static.frontendmasters.com/assets/courses/2021-07-06-computer-science-v2/thumb.webp",
    popular: false,
    video: "https://www.youtube.com/watch?v=5B2c9KZ5pRs",
    description:
      "This course is great for any developer looking to learn Angular through building an app with real-world features! We start off using the Angular CLI to get set up quickly. Then we'll learn Angular core concepts like components, templates, routing, forms, server-side communication, and more. By the end of this course, you'll have learned how to build a complete application from start to finish and have the skills to go out into the world and build your own!This course and others like it are available as part of our Frontend Masters video subscription.",
    publish: "Published: February 1, 2022",
  },
  {
    title: "Redux Fundamentals (feat. React)",
    profile:
      "https://static.frontendmasters.com/assets/teachers/kinney/thumb.webp",
    name: "Steve Kinney",
    org: "Temporal",
    desc: "Learn the Redux API from scratch, then learn to hook Redux into a React application. Also learn how to extend Redux with various tools from its ecosystem, including Reselect, Immer, and Redux Toolkit, to reduce boilerplate and speed up your development!",
    time: "4 hours, 41 minutes ",
    bg: "https://static.frontendmasters.com/assets/courses/2021-06-15-redux-fundamentals/thumb.webp",
    popular: true,
    video: "https://www.youtube.com/watch?v=5B2c9KZ5pRs",
    description:
      "This course is great for any developer looking to learn Angular through building an app with real-world features! We start off using the Angular CLI to get set up quickly. Then we'll learn Angular core concepts like components, templates, routing, forms, server-side communication, and more. By the end of this course, you'll have learned how to build a complete application from start to finish and have the skills to go out into the world and build your own!This course and others like it are available as part of our Frontend Masters video subscription.",
    publish: "Published: February 1, 2022",
  },
  {
    title: "Website Accessibility, v2",
    profile:
      "	https://static.frontendmasters.com/assets/teachers/kuperman/thumb.webp",
    name: "Jon Kuperman",
    org: "Cloudflare",
    desc: "Audit and fix accessibility issues on any website! Learn keyboard accessibility, focus control & ARIA roles to make sites accessible to screen readers and those with disabilities.",
    time: "2 hours, 52 minutes ",
    bg: "https://static.frontendmasters.com/assets/courses/2021-06-08-accessibility-v2/thumb.webp",
    popular: false,
    video: "https://www.youtube.com/watch?v=5B2c9KZ5pRs",
    description:
      "This course is great for any developer looking to learn Angular through building an app with real-world features! We start off using the Angular CLI to get set up quickly. Then we'll learn Angular core concepts like components, templates, routing, forms, server-side communication, and more. By the end of this course, you'll have learned how to build a complete application from start to finish and have the skills to go out into the world and build your own!This course and others like it are available as part of our Frontend Masters video subscription.",
    publish: "Published: February 1, 2022",
  },
  {
    title: "React and TypeScript",
    profile:
      "https://static.frontendmasters.com/assets/teachers/kinney/thumb.webp",
    name: "Steve Kinney",
    org: "Temporal",
    desc: "Ship React apps with more code confidence using TypeScript! Migrate your app to TypeScript, type simple and advanced React components, and learn all types shipped with React for writing React with TypeScript.",
    time: "5 hours, 3 minutes ",
    bg: "https://static.frontendmasters.com/assets/courses/2021-05-25-react-typescript/thumb.webp",
    popular: true,
    video: "https://www.youtube.com/watch?v=5B2c9KZ5pRs",
    description:
      "This course is great for any developer looking to learn Angular through building an app with real-world features! We start off using the Angular CLI to get set up quickly. Then we'll learn Angular core concepts like components, templates, routing, forms, server-side communication, and more. By the end of this course, you'll have learned how to build a complete application from start to finish and have the skills to go out into the world and build your own!This course and others like it are available as part of our Frontend Masters video subscription.",
    publish: "Published: February 1, 2022",
  },
  {
    title: "The Rust Programming Language",
    profile:
      "https://static.frontendmasters.com/assets/teachers/feldman/thumb.webp",
    name: "Richard Feldman",
    org: "NoRedInk",
    desc: "Go from zero Rust knowledge to being able to build your own complete Rust programs! You’ll use Rust’s built-in data types and standard libraries, add-in packages from Rust’s package ecosystem, and dive into Rust-specific concepts like ownership, borrowing, and lifetimes.",
    time: "4 hours, 42 minutes ",
    bg: "https://static.frontendmasters.com/assets/courses/2021-05-11-rust/thumb.webp",
    popular: true,
    video: "https://www.youtube.com/watch?v=5B2c9KZ5pRs",
    description:
      "This course is great for any developer looking to learn Angular through building an app with real-world features! We start off using the Angular CLI to get set up quickly. Then we'll learn Angular core concepts like components, templates, routing, forms, server-side communication, and more. By the end of this course, you'll have learned how to build a complete application from start to finish and have the skills to go out into the world and build your own!This course and others like it are available as part of our Frontend Masters video subscription.",
    publish: "Published: February 1, 2022",
  },
  {
    title: "Complete Intro to React, v6",
    profile:
      "https://static.frontendmasters.com/assets/teachers/holt/thumb.webp",
    name: "Brian Holt",
    org: "Stripe",
    desc: "Much more than an intro, you’ll build with the latest features in React, including hooks, effects, context, and portals. Learn to build real-world apps from the ground up using the latest tools in the React ecosystem, like Parcel, ESLint, Prettier, and React Router!",
    time: "2 hours, 48 minutes ",
    bg: "	https://static.frontendmasters.com/assets/courses/2021-08-04-intermediate-typescript/thumb.webp",
    popular: false,
    video: "https://www.youtube.com/watch?v=5B2c9KZ5pRs",
    description:
      "This course is great for any developer looking to learn Angular through building an app with real-world features! We start off using the Angular CLI to get set up quickly. Then we'll learn Angular core concepts like components, templates, routing, forms, server-side communication, and more. By the end of this course, you'll have learned how to build a complete application from start to finish and have the skills to go out into the world and build your own!This course and others like it are available as part of our Frontend Masters video subscription.",
    publish: "Published: February 1, 2022",
  },
  {
    title: "Intermediate React, v3",
    profile:
      "https://static.frontendmasters.com/assets/teachers/holt/thumb.webp",
    name: "Brian Holt",
    org: "Stripe",
    desc: "Build scalable React applications while learning React hooks in-depth, CSS-in-JS with TailwindCSS, increase performance with code splitting and server-side rendering, add TypeScript, state management with Redux, test your app with Jest …and more!",
    time: "6 hours, 7 minutes ",
    bg: "	https://static.frontendmasters.com/assets/courses/2021-05-04-intermediate-react-v3/thumb.webp",
    popular: false,
    video: "https://www.youtube.com/watch?v=5B2c9KZ5pRs",
    description:
      "This course is great for any developer looking to learn Angular through building an app with real-world features! We start off using the Angular CLI to get set up quickly. Then we'll learn Angular core concepts like components, templates, routing, forms, server-side communication, and more. By the end of this course, you'll have learned how to build a complete application from start to finish and have the skills to go out into the world and build your own!This course and others like it are available as part of our Frontend Masters video subscription.",
    publish: "Published: February 1, 2022",
  },
  {
    title: "VIM Fundamentals",
    profile:
      "https://static.frontendmasters.com/assets/teachers/theprimeagen/thumb.webp",
    name: "ThePrimeagen",
    org: "Netflix",
    desc: "Learn the basics of editing and navigation in VIM. You'll learn macros, registers, find, and replaces. Finally, edit your vimrc plugins along with quickfix lists and get a demo of ThePrimeagen's ideal VIM workflow!",
    time: "4 hours, 14 minutes ",
    bg: "https://static.frontendmasters.com/assets/courses/2021-04-20-vim-fundamentals/thumb.webp",
    popular: false,
    video: "https://www.youtube.com/watch?v=5B2c9KZ5pRs",
    description:
      "This course is great for any developer looking to learn Angular through building an app with real-world features! We start off using the Angular CLI to get set up quickly. Then we'll learn Angular core concepts like components, templates, routing, forms, server-side communication, and more. By the end of this course, you'll have learned how to build a complete application from start to finish and have the skills to go out into the world and build your own!This course and others like it are available as part of our Frontend Masters video subscription.",
    publish: "Published: February 1, 2022",
  },
  {
    title: "Intermediate TypeScript",
    profile:
      "https://static.frontendmasters.com/assets/teachers/north/thumb.webp",
    name: "Mike North",
    org: "LinkedIn",
    desc: "TypeScript adds a powerful type system on top of your JavaScript to catch bugs before they happen and provide a superior developer experience for collaborative teams.",
    time: "2 hours, 48 minutes ",
    bg: "	https://static.frontendmasters.com/assets/courses/2021-08-04-intermediate-typescript/thumb.webp",
    popular: false,
    video: "https://www.youtube.com/watch?v=5B2c9KZ5pRs",
    description:
      "This course is great for any developer looking to learn Angular through building an app with real-world features! We start off using the Angular CLI to get set up quickly. Then we'll learn Angular core concepts like components, templates, routing, forms, server-side communication, and more. By the end of this course, you'll have learned how to build a complete application from start to finish and have the skills to go out into the world and build your own!This course and others like it are available as part of our Frontend Masters video subscription.",
    publish: "Published: February 1, 2022",
  },
];

localStorage.setItem("all_courses", JSON.stringify(all_courses));
