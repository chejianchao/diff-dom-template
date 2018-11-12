# diff-dom-template
  **This is a template for vanilla js with diff algorithm to improve render efficiency.** [diff-dom Lib Source Code](https://github.com/chejianchao/diff-dom)  
  
  ![picture](https://media.giphy.com/media/mRnFokMDKnQocunGkD/giphy.gif)
  
# How to use
  1. clone or download this repository.
  2. npm install
  3. npm run build
  4. open index.html
  5. write your code in `src` folder.
  6. after writting your code, you must run `npm run build` again.
  7. You can use the basic DOM tag in html(like div, button, and etc.) and it support `JSX` syntax.

# Api
  `DiffDom.shouldRender()` will notify to render the dom.
  Your component which extends from `Component` can use setState to notify to render the dom, you can go to ./src/component1.js to see the example.

# Notice
  1. Component should be used after created and called `component.render()`, you can not use it as `<Component />`. 
  2. Component doesn't support Life Cycle method right now.
  
# Next Step
  1. Support Self-define Component JSX syntax, like `<Component />` and Function Component.
  2. Life Cycle of Class Component. such as `ComponentDidMount`, `ComponentWillUnmount` and etc.
  3. Integrate WebPack to make development easily, such as save file and rebuild automatically.
