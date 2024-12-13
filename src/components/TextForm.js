import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase.","success")
    }
    const handleClearClick = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared.","success")
    }
    const handleLoClick = ()=>{
        // console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase.","success")
    }

    const handleCopy = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard.","success")
    }

    const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space removed.","success")
    }
    const handleOnChange = (event)=>{
        // console.log("Uppercase was clicked");
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    // setText("This is new Text");
    return (
        <>
        <div className="container" style={{color: props.mode ==='dark'?'white' : 'black'}}>
            <h2>{props.heading}</h2>
            <div className="my-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'#042743' : 'white',color: props.mode ==='dark'?'white' : 'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Conver To Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Conver To Lowercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Sapce</button>
        </div>
        <div className="container my-3" style={{color: props.mode ==='dark'?'white' : 'black'}}>
            <h2>Your text summury</h2>
            <p>{text.split(" ").length} words and {text.length} characters.</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter the text to previwe"}</p>
        </div>
        </>
    )
}