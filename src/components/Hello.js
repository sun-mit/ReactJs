import React from 'react'

const Hello = () => {
// return(
//     <div className ="dummyClass">
//        <h2>Benifits Of JSX</h2>
//    </div>
// )

   return React.createElement(
       'div',
       {id:'hello' , className: 'dummyClass'},
       React.createElement('h1' , null, 'Benifits Of JSX')
   )
}

export default Hello
