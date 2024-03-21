import React, {useState} from 'react'




export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked" + text);
        let newText= text.toUpperCase();
        setText(newText)
    }
    const handleLoClick=()=>{
        console.log("Uppercase was clicked" + text);
        let newText= text.toLowerCase();
        setText(newText)
    }
    const handleClearClick=()=>{
        let newText= '';
        setText(newText)
    }
    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    const handleCopy=()=>{
        console.log("I am copy");
        var text=document.getElementById("mybox")
        text.Select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(""))
    }
  const [text, setText] = useState('Enter text here ');
  return (
       <>
      <div className="container">
           <h1>{props.heading}</h1>
           <div className="mb-3">
           <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
           </div>
           <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
           <button className="btn btn-primary  mx-2" onClick={handleLoClick}>Convert to loweercase</button>
           <button className="btn btn-primary  mx-2" onClick={handleClearClick}>clear text</button>
           <button className="btn btn-primary  mx-2" onClick={handleCopy}>copy text</button>
           <button className="btn btn-primary  mx-2" onClick={handleExtraSpaces}>Remove Extra spaces</button>
        </div>
        <div className="container my-3">
            <h1>Your text summary</h1>
            <p>{text.split("").length} words and {text.length} characters</p>
            <p>{0.008 *text.split("").length } minutes read </p>
             <h2>Preview</h2>
             <p>{text.length>0?text:"Enter something in the textbox above to preveiw it"}</p>
        </div>
        </>
    )
}
 
