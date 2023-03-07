---
title: 'Learn About Routing in Next.js'
subtitle: 'Overview of Next.js Routing Rules'
date: '2023-03-01'
---

- File system based routing mechanism.
- When a file is added to the pages folder it automatically becomes available as route.
- By mixing and matching files names with nested folder structure, it is possible to pretty much define the most common routing patterns.

### Case 1 : Serving the index page

**index.js** inside the pages folder is served when user visits localhost:3000/ . Creating the functional component inside index.js and default exporting it completes this task.

index.js file inside the pages component will map to the root of the domain.

### Case 2 : Serving about and profile page

Consider 2 pages about and profile page has to be served whenever user visits localhost:3000/about and localhost:3000/profile. How to achieve this task?

Except for index.js all the routes are matched from the file name so consider two files about.js and profile.js inside the pages folder. if we visit localhost:3000/about we will be served about.js and if we visit profile page we are served profile.js

So file name is matched with the url and then page is served.

