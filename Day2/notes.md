git crash course

1. git init = intializes a new repositry
2. git branch -M main = by default main is always master so we have to change that by this
   // git branch = this command is to working with branches
   // -M = forecefully rename a branch

// we rename master to main because it's a tradition of not using master as it is negative as said by google , genrally it don't matter now

3. git add . = addding all files for commiting 4. git commit -m "added something" = we can commit here to main branch in our local repositary

4. this process is in my laptop to set remote we have to use

5. git remote add origin "link" = that's it this step only once , git remote add means adding a new remote , origin is name given to that remote repositary and link is mandatory

6. git push origin main = push it to main branch
   git push = send local commits to remote repositary ,
   origin = name of that remote repositary
   main= this is the branch that i wanna push

7) React is not making our app fast , there are lot of libararies that make our app fast , apperciate every package that helps react to build fast and scalable app

8) what is npm = npm is not node package manager because it has no abbrevation , npm manages packages.

9) what is npm then = it is repositray for all the packages , all the libraries , utilites .

10) when you create a react app it automatically has npm in it , but we are in this project doin it maually to undertsand
    /////////////////////////////////////////
11) to bring npm to our project use = npm init (When you install Node.js, npm (Node Package Manager) is included with it. Running npm init initializes a new package.json file for your project and sets up the basic configuration. It's like waking up npm for your specific project.)

12) Running npm init doesn't install npm itself into your project; rather, it initializes your project and sets up a package.json file. The package.json file is a configuration file for your Node.js project, and it includes metadata about your project as well as information about its dependencies, scripts, and other settings.

Once you have a package.json file, you can use npm install to install the project dependencies listed in that file. This command installs the necessary packages into the node_modules directory within your project.

11. npm (Node Package Manager) is a package manager for JavaScript, and it typically comes bundled with Node.js when you install Node.js on your system. Therefore, when you run npm init in a Node.js project, it assumes that npm is already present on your machine as part of the Node.js installation.

13) it will ask some questions answer them
14) thisi is my git repositary link =>
    https://github.com/sagargouda/react-learnings.git

15) pacakge.json file is configuartion of our npm , The package.json file is used to manage and configure Node.js projects.

16) why do i need this package.json we need this because npm will manage packages which we will install , sometimes these packages also known as dependencies , both are same thing , and our project is dependent on so many difffrent packages , and npm will take care of what is version of what is version of that package so it will take care on package.json

17) first package we install is bundler so what is it ,it bundles our app perfectly so we can send it to production bundler helps to clean , cache.

18) we are using parcel as a bundler , there are so many like veet , webpack they just used bundle our code files

19) we install now = npm install -D parcel , there are 2 types of dependecies we can have 1) dev dependcies => it means generally reqired in development phase 2) normal dependecies = used in production also . -D means dev dependcies.

20) check package.json you see dependcies there is parcel: ^2.8.3 , what is ^ and i can also use ~
    so ^ means

21) caret = (^) = means if my dependcies version is "^2.8.3" then it allows any version from 2.8.3 up to , but not including "3.0.0" . and i can get updates like 2.9.1 , 2.9.5 but not 3.0.0 until i explicitly update

22) Tilde => (~) = means take same example "~2.8.3" , then it allows any version from "2.8.3" up to , but not including "2.9.0". and i can get updates like "2.8.4" , "2.8.5",etc but not "2.9.0" until i explicitly update

To summarize (^) = boht aage dekhnewala , (~) = Chote chote kadam dekhnewala .

22. to serach in a file we use ctrl + shift + f

23) what is package-lock.json ? and diffrence between package.json
    => package-lock.json keeps the track of exact version , and package.json can have caret and tilde , basic diffrence is package.json is approx version , package-lock.json is exact. there is integrity is SHA-512 hash , hash is present because something wil work on local and break on production so package-lock.json has hash which means exact version which was present in local will be there on production too,it helps maintain consistency and avoids potential issues that may arise due to different versions being installed in different environments.

24) when i created parcel there is another thing called node modules , these contains all the code that fetched from npm , node modules is like data base of those dependcies that a pacakge needs.

25) I have installed parcel shouldn't that be alone why so many ?
    => okay , when we install our bundler parcel , it also has dependecies , and those dependecies has their own dependcies so this is known as transitive dependecies and none of them is garbage eveything we need.

26) how would npm know what dependcies parcel have ?
    => basically when i do npm install parcel , npm reads package.json file of parcel and fetches it's dependcy and installs them in node modules and process is recursive and package-lock.json maintains specific versions of each installed dependency.

27) how many package.json we have in our project ?
    => not 1 ,the main one is root of my project how many depedncies we have that many package.json and there you can see dependcies parcel using and got there and check that package.json and you seee that package.json file and dependceies

28) node modules is collection of dependcies

29) we don't need to put all these node modules to github so we use git ignore , it doesn't allow node modules into production .

30) we shoudl put package.json and package-lock.json in git because they keep track of dependecies right , so we need to put on github , so why not node modules , because when i have these 2 packages i don't need node modules because they can regenerate that by npm install , Including package.json and package-lock.json ensures that anyone cloning or pulling the project can run npm install and get the exact dependencies specified in those files. The package-lock.json file, with its integrity checks, ensures that the correct versions are installed, providing consistency across different environments.

31) whatever we can regenerate don't put in on git.

32) we use parcel to ignite our app using npx parcel index.html , so for day2 i am running parcel go inside of day2 folder first then do npx parcel

33) what happens is parcel created a server for us localhost:1234 ,so ignited our app.

34) npx = executing a package , npm = installing a pacakge

35) npx parcell index.html = This command tells Parcel to bundle your project starting from the index.html file. It will automatically detect the entry point (like index.js) and build the project. Additionally, it will set up a development server and host your application. Parcel will watch for changes in your files and automatically reload the page when you make updates.

36) we can install react from npm also
    don't use cdn links because they are hevy operations because we are fetching and because of version issues , in cdn we have to do it manually but using npm pacakge.json checks and also install react dom

37) npm install react , npm install react-dom

38) how do i use react = import React from "react"; what is this "react" refer to react from node modules.

39) import ReactDOM from "react-dom"
40) and obviously it won't work and have a error called browser scripts cannot have imports and exports.

41) so resolution is add module attribute in script tag , why this because normal js doesn't have import so browser doesn't understand so we have to it is not file it is module. because react is a module

42) so in script tag do type = "module" , so it will not be normal script , it will be a module.

43) if any error comes up like The specific error "Expected content key 88a9c5f1803ec45d to exist" is related to the internal workings of Parcel and might be caused by various factors. then just delete parcel-cache and redo npx parcel index.html.

44) import ReactDOM from "react-dom"; write this or else you will get type not defined error.

45) that speed is done by parcel

46) parcel is doing dev build , local server and also HMR = hot module replacement which means when i cahnge something in my file react automatically refreshing because it does hmr , HMR is a feature that allows changes to be injected into the running application without a full page reload.
    When you make changes to your React components or other source files, Parcel uses HMR to apply those changes in real-time, preserving the application state.

47) beacuse parcel can does this by file watching algorithm which is written in js.

48) build is taking so less time because of caching where it is caching , when we build our project , it will take some space and called .parcel-cache and there are cached files , so next build will devlop faster.

49) parcel will also do image optimisation

50) parcel will also minify of our file.

51) parcel also bundling.
52) parcel also compress or minification. like removing whitespaces
53) so shoutout to parcel.
54) parcel is like manger of so many libararies in node modules.they work togther
55) parcel is doing code splitting , Code splitting is especially crucial for single-page applications (SPAs) and large-scale applications where reducing the initial load time is a priority. It's commonly used in conjunction with tools like bundlers (e.g., Webpack, Parcel)
56) parcel give diffrential bundlng which means it will also run smooothly on older broswer and also mobile phones etc.

57) read more on parcel.org
58) diffrence between dev and prod build ,
59) npx parcel build index.html , remove index.js in main in package.json
60) you now get dist becuase of production build , because it is building it in dist . so you can delete that because you can regenrate it , see files in dist evrything are compressed.because in production eveyrtyhing done more seriously.
61) so keep dist and partcel cache in gitignore
62) dev build = npx parcel index.html
63) production build = npx parcel build index.html

64) browser's list = npm package , you have to tell your project what browsers your project can work like this in package.json file "browserlist":[
    "last 2 Chrome versions"
    ]
    go to website called browserlist you can check there
65) now after doing all this we finally created our own create own react app.
