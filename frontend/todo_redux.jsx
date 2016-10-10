// React
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root.jsx';



// const Trial = () => {
//   return (
//     <div>
//       Hello World
//     </div>
//   );
// };

document.addEventListener("DOMContentLoaded", function() {
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, document.getElementById('content'));
});
