1. npx parcel index.html => it means executing parcel and source as index.html
2. we can do short of it by making them as scripts for avoiding wtitinf it again and again

3) for creating a script you can create in package.json in scripts objects
4) "start": "parcel index.html" , so i have created one scripts , also create a scripr fo production "build":"parcel build index.html"

5) these are industry standard to build our project , they create scripts to start building. so always check package.json.
6) now i can do npm run start and also npm run build
7) "start": "parcel Day3/index.html",
   "build": "parcel build Day3/index.html"
   because my file is in day3 folder

8) npm run start === npm start , both are same but you can't do it for build.

9) Let's start JSX

10) what is a react element?
    => which are kind of equalent to dom elements , you can think of React elements as a virtual representation or a blueprint for what will eventually become the actual DOM elements. React elements are not actual DOM elements themselves; they are lightweight JavaScript objects that describe what you want to render on the screen.

11) there are 3 arguements when i create elements 1. what i wanna create , 2. id or classes 3. children

12) react elemnt is not html element , it basically creates an object so when we render the elemnts to dom it becomes a html element.

13) whatever happpens inside react will happpen in root , when we do recat.create element it created a react element which is a js object and when we do root.render it takes react element and converts to html elment and replace in html 

14) in javacsript react element is just an object

15) facebook developers created something called JSX , it is a javascript syntax and also jsx is not part of react , jsx is just a syntax extension of js. we can write react without jsx also.

16) jsx is difffrent than html , not html inside js , jsx is html like syntax

17) jsx is just a syntax to write react element to show that react element is javscript object

18) js engine doesn't understand jsx because it understand ecma script(ES6) , that is what my broowser and js engine understand , so jsx is not valid js , so how is it working , parcel our homie is doing the job for us , when i write jsx , even before it goes to js engine it transpiled and js engine recive code that browser can undertstand.

19) jsx code is transpiled before it reaches js engine.

20) who is transpiling this code = parcel(babel)
21) parcel is not doing it , but babel is doing it .
22) babel is in node modules already
23) how is jsx running ?
    => before react.createelemnt is converted into object , it rendered into html element.
    => when we give jsx , jsx is transpiled into react create element and react crete element is then rendered onto html as dom.

24) babel converts jsx to react .creact elemnts and now react understands it

25) babel trsnapiles es6 code such that older browser understands

26) babel is also js code which takes a piece of code and converts

27) how babel converts (it reads tokens like angular brackets and AST and does it) so babel is a javasscript compiler

28) if giivng attribute to jsx we have to use camelcase

29) single line and multiple line thing
    single line is perfect but for multi line you have to wrap it in round brackets. because babel needs to understand where babel is starting and it is ending.

const example = (<h1>sagar is dumb i think may be </h1>)

30. everything in react is a component

31) there are 2 types of component in react
    i) class based component = old way of writing code
    ii) functional component = new way of writing code

32) react functional component is just javscript fucntion which returns some jsx fucntion code

33) so name it with Cappital letter , it is a react way undestanding things

34) fucntional component = javascript fucntions returning a react element is a fucntional component

35) don't forget if you make functioonal components that thing should be in capital

36) A React element is a plain JavaScript object representing part of the UI, while a React component is a reusable, self-contained code unit that may consist of one or more elements, encapsulating UI logic.

37) in react elemnt the variable can be small letter at starting but in react component it should be Capital

38) in react , each component should return a single parent element to rooot. so we can't do this
const Heading = () => (
  <Title />
  <h1 className="sagar">Wassup</h1>
);

39) so we wrap that in a parent such as div
const Heading = () => (
  <div>
    <Title />
    <h1 className="sagar">Wassup</h1>
  </div>
);

40) React expects a single root element, so wrapping them in a <div> or another container is a common practice:

41) what is component composition = Component composition in React refers to the practice of combining or nesting multiple components to create a more complex user interface

42) arrow fucniton is industry wise standard to write code

43) inside {} you can write any js code
    <h1>hey sagar {num}</h1>
44) we have to use 2 braces for writing inline styles
    const num = () => <h1 style={{ backgroundColor: "red" }}>hey sgaar</h1>;
    outer = indicates we are embedding js expression within jsx
    inner = we create js object literal for defining inline styles

45) react fragment syntax <></> = it bascially allow me to group multiple react element without iluding extra dom
    root.render(
    <>
    <Heading />
    {num}
    </>
    );

46) basiclayy react fragment synatx allow me to group multiple elements without adding extra nodes to DOM so we are doin git for unnecassary adding of div , we do it and it is so muych helpful because reactv normally expects single parent element whe rendering componentsw no w fragments allow me to grouyp muliple elements without adding uneccassry nodes to dom which is clean and effective 