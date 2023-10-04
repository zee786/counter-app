# Counter app

This is a very simple (and badly written) application that keeps track of clicks for each user. A user can login with their username and use a button to increase their counter. The app then displays all counters.

# Instructions
The server and the client are separate applications. The server can be started with

```
npm install
npm run build
npm run start
```

and the client with

```
npm install
npm run start
```

Then, navigating to localhost:3000 will display the login page.

# Tasks
Your task is to fix and improve the application as much as you can. Do not spend more than a couple of hours on this. If there are still remaining tasks to do, just write down your ideas and we'll go through them in the interview.

Some ideas:
- Code quality
    - error handling
    - keep the user on the same page while reloading
- Persistence
    - can be achieved using localstorage at the frontend
- Displaying counters in a meaningful way
- Security concerns
    - Add permissions or acces rights
    - Implement user authentication and authorization using AWS Cognito or other identity providers supported by Amplify.
- Supporting simultaneous users
- Page style
- Better build pipeline
   - Gitlab
   - Folder for stage and productions
   - Implement a CI/CD pipeline to automate testing and deployment processes.
   - Consider using monorepo or vite
   - Code Linting and Formatting
   - Testing
   - Monrepo i.e. lerna but increase build times

- ...

# Discussion
During the interview, we'll go through your solution and discuss further topics, such as:
- How would you host this kind of application on AWS?
  - Depends on the applicatoin i.e. for Serverless application, Hosting with AWS Amplify is a good option
  -
- How would you ensure that the application operates correctly in production?
 - Automation testing
 - CI/CD

- How could we achieve low-latency when accessing the application from different parts of the world?
 - CDN - Leverage CDNs like Amazon CloudFront or Cloudflare to cache and distribute static assets and dynamic content closer to end-users.
 - Content caching
 - CloudFront seamlessly integrates with other AWS services like AWS Lambda@Edge, which allows you to run serverless code at the edge locations for customizing and optimizing content delivery.

# Submission
Please put your solution in a Github repository and email us a link to it. Just don't mention Elo so that other applications can't find it.
