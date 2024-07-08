**Learning backend from chai-aur-code-youtube**

**first project**













must go through [sample project](https://github.com/dakshjainn/backend-JS-quickstart) 
# Setup
1. install package.json
	`node -v` to check version
	`node init`
 2. public directory having temp to temporarily store some user data(images) on our server before permanently store than on third party services
 3. .gitkeep in public/temp so that git can track these nested folders
 4. src directory having touch app.js constants.js index.js
 5. .gitignore file and cope paste using gitignore generator for node 
 6. .env file
 7. download nodemon so that we don't have to reload (stop and start) the server again and again to see the changes
	 ` npm i -D nodemon`
	 then in package.json set `"dev": "nodemon src/index.js"` in scripts.
8. `mkdir controllers db middlewares models routes utils` in src
9. install prettier to avoid conflicts while working in a team (some use 2 space some 4, some use comma some don't) `npm i -D prettier`
10. .prettierrc in main folder and write the following code
```
{ 
		"singleQuote": false,
	"bracketSpacing": true,
	"tabWidth": 2,
	"trailingComma": "es5",
	"semi": true
}
```
11. .prettierignore and write the following code
```
/.vscode
/node_modules
./dist

*.env
.env
.env.*
```

# connect database
- make a cluster on a database and do all the formality and get the link to connect the database
- install dotenv mongoose express & 
- set env variables for monodb and PORT
- in index.js file connect the database always use async await or promises, use try and catch (use iffe)
- because always remember  *database is always in another continent* 
- using different file db/index.js for writing the code to connect DB.
- setup dotenv for good consistency of code and use the experimental feature `-r dotenv/config --experimental-json-modules` 

# Custom api response and error handling
- .catch and .then after calling Db connection code (because in db/imdex.js we written asynchronous method so it will return a promise)
- in .then app.listen() because till now database is connected but our app didn't start listening to that database
- watch video `@5:31` 
- install cors and cookieparser
- app.use is used for middleware and configurations
- implement and explore cors
- in .env CORS_ORIGIN=* , * means all urls are allowed
- setting limit so that too much json cant come otherwise server will crash