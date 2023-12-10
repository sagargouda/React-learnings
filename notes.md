1. What is emmet
   => emmet basically helps us to write html and css faster , it is like a abbreviation engine for vs code.

2) Browser do not know react code,so we have to get react into our project

3) first way to add react is by cdn
   cdn links is nothing but content delivery network , it is a place where react library is hosted

4) what is CDN ?
   => it is a content delivery network and it s a network of distributed servers that work together to deliver web content like image , stylesheets etc . when comes to react , cdn is used to deliver the library/framework files to users.

5) Why we wanna use cdn ?
   => 1) performance :- because they are distributed globally , so when a user access your website , the content(react libraries) can be served from a server that is physically closer to them , so improves loading time. 2) version control .

6) what is cross origin attribute in react ?
   => When your React app tries to fetch data from a different website, the browser might block it for security. To allow this, you can use attributes like crossorigin in certain HTML elements (like <script> tags). This ensures a secure way to get data from other websites in your React app.

7) What is inside that link of react ?
   => That's the code of react and plain javscript code , so react is just a javscript library.

8) What happened when we got react in our project ?
   => you go to console you see a large object which has heavy methods which we can use.

9) What is the 2nd file ?
   => there are 2 files because , 1st file is core file of react , 2nd one is react dom this is react library which is used for dom operation.

10) why did react made 2 files ?
    => because react not only work for mobile it also work for phones , react 3d and all of these has diffrent methods so that is why there are 2 files

11) In javscript we use document.createElement bnut in react it is replaced by React.createElement and it takes 3 arghuments 1) what tag you wanna create 2) an object 3) what we wanna put inside that tag.

12) creating a root is job of react dom , because react needs a root where it can render things

13) what is that mssing object ?
    => that is the place where i can give id and class like attributes.make sure id is in ""

14) at the end of day react.createElement is also javascript object. it has props which are nothing but h1 tag , object and other argument they come under props.

15) root.render job is to convert the javscript object that heading and when you do root.render method wil conbvert that heading tag to h1 and will put it out.

16) React element is an object that becomes while rendering onto dom

17) If you want to have siblings like 2 h1 tags then use array , when you do it will throw an error in developer tools.

18) so now our hero coms to rescue 'JSX'. jsx will make our lives easy.

19) will the order matters of script like your index.js and react (yes) it matters a lot if you write index.js first and then react it will throw an error because code inside index.js uses react so react is priority.

20) WHAT DOES root.render do ?
    => root.render() is the step where React turns your virtual UI representation (React element) into real DOM elements and updates the visible content on your web page.

21) suppose if something alreafy existed here it will replace that something because react code is the priorirty ,

22) React still needs html because ultimatiely it renders content to DOM , which is an html based structure

23) i can just use
    const root = ReactDOM.createRoot(document.body); for making react work , i don't need any div id to be present in html , but here when you wirte something in html it won't work so that is the reason why use particular part for making react work and also work in html

24) react is a library not framework , react can be applied to smal page of our page like header or foooter it works only in place where we write react code but in framworks we have to follow it's rules
