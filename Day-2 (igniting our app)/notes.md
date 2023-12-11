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
