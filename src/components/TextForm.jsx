import React, {useState} from 'react'

export default function TextForm(props) {

    const [text, setText]=useState('')
    // setText("Enter your feedback"); 
    //correct way to change the value of text (state)

    const upClick=()=>{
        // console.log("Button is clicked")
        // setText("click kar dia re chore");
        setText(text.toUpperCase());
    }
    const lowClick=()=>{
        // console.log("Button is clicked")
        // setText("click kar dia re chore");
        setText(text.toLowerCase());
    }
    const handleOnChange=(event)=>{
        // to change the value of value={text} to value={setText}
        setText(event.target.value);
    }
    const copyTxt=()=>{
        let txt=document.getElementById('myBox').value;
        navigator.clipboard.writeText(txt);
        props.showAlert("Copied to clipboard","success");
    }
    const clearTxt=()=>{
        // to change the value of value={text} to value={setText}
        // let text=document.getElementById('myBox');
        // text.value="";
        setText("")
    }
    const wordCount=()=>{
        // if(text===""){
        //     return 0;
        // }
        // if (text.charAt(text.length-1)===" ") {
        //     return text.split(" ").length-1
        // }
        return text.split(" ").filter((element)=>{return element.length!==0}).length;
    }
    const removeSpaces=()=>{
        setText(text.split(/[ ]+/).join(" "));
    }
    return (
        <>
        <div className="container">
            <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className={`form-control`} style={{backgroundColor: props.mode==='dark'?'#929090':'white', color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" value={text} rows="12" placeholder='Enter your text here'></textarea>
            </div>
            <button className={`btn btn-danger btn-outline-primary mx-2 my-1 text-${props.mode==='light'?'dark':'light'}`} disabled={text.length===0}  onClick={upClick}>Convert to uppercase</button>
            <button className={`btn btn-danger btn-outline-primary mx-2 my-1 text-${props.mode==='light'?'dark':'light'}`} disabled={text.length===0}  onClick={lowClick}>Convert to lowercase</button>
            <button className={`btn btn-danger btn-outline-primary mx-2 my-1 text-${props.mode==='light'?'dark':'light'}`} disabled={text.length===0}  onClick={copyTxt}>Copy Text</button>
            <button className={`btn btn-danger btn-outline-primary mx-2 my-1 text-${props.mode==='light'?'dark':'light'}`} disabled={text.length===0}  onClick={clearTxt}>Clear Text</button>
            <button className={`btn btn-danger btn-outline-primary mx-2 my-1 text-${props.mode==='light'?'dark':'light'}`} disabled={text.length===0}  onClick={removeSpaces}>Remove Extra spaces</button>
        </div>
        <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`} >
            <h1>Your text summary</h1>
            <p>Number of words={text.split(" ").filter((element)=>{return element.length!==0}).length} and number of characters={text.length}</p>
            {/* <p>Number of words={wordCount()} and number of characters={text.length}</p> */}
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minuts required to read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:'Your text preview will appear here'}</p>
        </div>
        </>
    )
}
