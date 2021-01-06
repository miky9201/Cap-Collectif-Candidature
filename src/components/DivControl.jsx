import React, { useState } from ' react ';

const DivControl = () => {
      const [isDiv1, setIsDiv1] = useState(false);
      const [isDiv2, setIsDiv2] = useState(false);
      const [isDiv3, setIsDiv3] = useState(false);

      return(
            <div id="div1" className={"section-1 " + color}>
                  <h1>{title}</h1>
            </div>
      )
}

export default DivControl;