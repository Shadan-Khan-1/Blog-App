// import React from "react";

// const Container = ({ child }) => {
//     console.log("container is rendering");
//   return (
//     <>
       
      
//         {/* <h1 className="text-center mt-5">Register Here</h1> */}

        // <div className=" mt-3 border border-info rounded ">
        //   <div className="justify-content-md-center text-center ">
        //     <h1>this is a container</h1>
        //     {child}
        //   </div>
        // </div>
      
//     </>
//   );
// }

// export default Container;




// Container.js
import React from 'react';

const Container = ({ children, className='', }) => {
  return (
    <div className={`border border-warning border-3 rounded ${className}`}>
    <div className="justify-content-md-center text-center ">
    {children}
  </div>
</div>
  );
};

export default Container;
