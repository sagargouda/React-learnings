also remember in scripts you have given
"start": "parcel Day3/index.html",
"build": "parcel build Day3/index.html"
so it will always run day 3 , so chnage it to day 4

2. when writing image make sure you give image address in src and tag is <img/>

3) planning is the first step like making wireframes
4) what components can my app have is the 2nd question
5) in our app we have 3 components for now header(logo, nav items , ) , body(search input, restaurant conatainer) , footer

6) while creatinf inline styles it takes js object

7) props = properties , which we can pass to a component

8) fucntiuonal component is just a jaascript fucntion so props are just javascrpit argument.

9) passing a prop to a component is like passign argument to a funtcion

10) so these arguments are wrappe in a object and passed

11) when we pass something dynamically we pass it through prop

12) we put all images in a cdn so diffrent images cdn url is same but cloudniary imag id will change

13) reusable components is where we pass dynamic props inside that.

14) Each child in a list should have a unique "key" prop. => this is the warning we get when we use map method , which means each of my item should be uniquely represent so we have to geive key property

15) when building infinte scroll this key , id helps a lot to avoid re rendering best for optimization

16) never use index as keys react docs says it
    because people use index when there is no id given

17) key attribute is special attribute use by react for oprtimixzzation purpose and it is not intended to be accessed as a prop within your components and won't be vsisible in html

18) it is not neccasry to use in prop you can skip it
