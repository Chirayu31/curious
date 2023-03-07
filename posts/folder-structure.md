---
title: 'Folder Structure of Next.js'
subtitle: 'Understanding files and folder generated when you create-next-app'
date: '2023-03-01'
---


1. **package.json** - contains dependencies and scripts required for the project.
2. **package-lock.json** - ensure consistent installation of dependencies.
3. **next.config.js** - next.js config file which just have reactStrictMode set to true
4. **eslintrc** - config file for eslint.
5. **.next folder** -  generated when we run dev or build scripts. It is from this folder our next.js app is served from.
6. **node modules** - in this folder all the dependencies are installed.
7. **styles** - contains style for the application. Not of significance bcoz we can create style anywhere. Just for better organization.
8. **public** - holds all the public resources of the application. Different from react public folder (it doesn't contain index.html file)
9. **pages** - this folder alone is responsible for routing in our application. 
	1. **index.js** file is served when we visit localhost:3000 
	2. `_app.js`  is the file where we can define layout for the application
	3. **api** folder contains all the api for the application.

