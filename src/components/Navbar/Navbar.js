import React from 'react';
import showToast from 'crunchy-toast';


export default function Navbar() {
    function Hello(){
        showToast('This is a sample toast message', 'success', 3000);
    }
  return (
   <>
   <button onClick={Hello}>Hello</button>
   </>
  )
}
