import React from "react";

const ChildFR = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
});
// const ChildFR = () => {
//   return (
//     <div>
//       <input type="text" />
//     </div>
//   );
// };

export default ChildFR;
