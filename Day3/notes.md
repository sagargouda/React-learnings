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
    => which are kind of equalent to dom elements , you can think of React elements as a virtual representation or a blueprint for what will eventually become the actual DOM elements. React elements are not actual DOM elements themselves; they are lightweight JavaScript objects that describe what you want to render on the screen.

11) there are 3 arguements when i create elements 1. what i wanna create , 2. id or classes 3. children

12) react create elemnt is not html element , it basically creates an object so when we render the elemnts to dom it becomes a html element.

13) whatever happpens inside react will happpen in root

14) in javacsript react element is just an object

15) facebook developers created something called JSX , it is a javascript syntax and also jsx is not part of react , jsx is just a syntax extension of js.

16) jsx is difffrent than html , not html inside js , jsx is html like syntax

17) jsx is just a syntax to write react element to show that react elemnt is javscript object

18) js engine doesn't understand jsx because it understand ecma script(ES6) , that is what my broowser and js engine understand , so jsx is not valid js , so how is it working , parcel our homie is doing the job for us , when i write jsx , even before it goes to js engine it transpiled and js engine recive code that browser can undertstand.

19) jsx code is transpiled before it reaches js engine.

20) who is transpiling this code = parcel
21) parcel is not doing it , but babel is doing it .
22) babel is in node modules already
23) how is jsx running ?
    => before react.createelemnt is converted into object , it rendered into html element.
    => when we give jsx , jsx is transpiled into react create element and react crete element is then rendered onto html as dom.

24) babel converts jsx to react .creact elemnts and now rect understands it

25) babel trsnapiles es6 code such that older browser understands

26) babel is also js code which takes a piece of code and converts

27) how babel converts (it reads tokens like angular brackets and AST and does it)

28) if giivng attribute to jsx we have to use camelcase

29) single line and multiple line thing
    single line is perfect but for multi line you have to wrap it in round brackets. because babel needs to understand where babel is starting and it is ending.

const example = (<h1>sagar is dumb i think may be </h1>)

30.
