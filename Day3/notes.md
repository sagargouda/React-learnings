1. npx parcel index.html => it means executing parcel and inside index.html
2. we can do short of it by making them as scripts

3) for creating a script you can create in package.json in scripts objects
4) "start": "parcel index.html" , so i have created one scripts , also create a scripr fo production "build":"parcel build index.html"

5) these are industry standard to build our project
6) now i can do npm run start and also npm run build
7) "start": "parcel Day3/index.html",
   "build": "parcel build Day3/index.html"
   because my file is in day3 folder

8) npm run start === npm start , both are same but you can't do it for build.

9) Let's start JSX

10) what is a react element?
    => which are kind of equalent to dom elements , ou can think of React elements as a virtual representation or a blueprint for what will eventually become the actual DOM elements. React elements are not actual DOM elements themselves; they are lightweight JavaScript objects that describe what you want to render on the screen.

11) there are 3 arguements when i create elements 1. what i wanna create , 2. id or classes 3. children

12) react create elemnt is not html element , it basically creates an object so when we render the elemnts to dom it becomes a html element.

13) whatever happpens inside react will happpen in root

14) in javacsript react element is just an objectr

15) facebook developers created something calledf JSX , it is a javascript syntax and also jsx is not part of react , jsx is just a syntax extension of js.

16) jsx is difffrent than html , not html inside js , jsx is html like syntax

17) jsx is just a syntax to write react element to show that react elemnt is javscript object

18) js engine doesn't understand jsx because it understand ecma script(ES6) , that is what my broowser and js engine understand , so jsx is not valid js , so how is it working , parcel our homie is doing the job for us , when i write jsx , even before it goes to js engine it transpiled and js engine recive code that browser can undertstand.

19) jsx code is transpiled before it reaches js engine.

20) who is transpiling this code = parcel
21) parcel is not doing it , but babel is doing it .
22)
