# diff-dom-template
  **This is a template for vanlina js with diff algorithm to improve render efficiency.**   
  
  ![picture](https://media.giphy.com/media/mRnFokMDKnQocunGkD/giphy.gif)
  
# How to use
  1. clone or download this repository.
  2. npm install
  3. npm run build
  4. open index.html
  5. write your code in `src` folder.
  6. after writting your code, you must run `npm run build` again.

# Api
  `DiffDom.shouldRender()` will notify to render the dom.
  Your component which extends from `Component` can use setState to notify to render the dom, you can go to ./src/component1.js to see the example.

# Notice
  Component should be used after created and called `component.render()`, you can not use it as `<Component />`.
  
  
 
 
