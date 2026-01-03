 import   {useEffect, useMemo, useState }  from "react";
 import parenttochild from "./classcomponetexample";

 
function Memoexample()
{
    const [one,updateone] = useState(0);


function parentcomponet()
{

}



 return (
<>
<h1>Counter : {one}</h1>
<button onClick={() => updateone (one + 1)}>update</button>
 

 <child ></child>
</>
  );
};

export default Memoexample;