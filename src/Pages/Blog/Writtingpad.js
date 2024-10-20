import React from 'react'
import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css'; 

function Writtingpad({readOnly,theme,value,setvalue}) {
    
    
    return <ReactQuill theme={theme} readOnly={readOnly} value={value} onChange={setvalue}/>
}

export default Writtingpad
