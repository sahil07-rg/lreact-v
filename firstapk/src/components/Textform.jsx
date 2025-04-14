import React,{useState} from 'react';



export default function Textform(props) {
    const [text, setText] = useState("");

    const handleUpClick= () => {
        console.log("Uppercase was clicked" + text );
        let newText= text.toUpperCase();
        setText(newText);

    }
    const handleonChange = (event) => {
        console.log("on change");
        setText(event.target.value);
    }
    const handleLoClick= () => {
      let newText= text.toLowerCase();
      setText(newText);
    }
    const handleClClick= () => {
      let newText= text.split(" ").reverse().join(" ");
      setText(newText);
    }

  return (
    <>
   <div className= "container" style={{color:props.mode=== 'dark'?'white':'black'}}>
    <h1>{props.headings}</h1>
      <div className="mb-3">
      
         
              <textarea className="form-control" id="myBox" value={text} style={{backgroundColor:props.mode ==='dark'?'grey':'white', color:props.mode=== 'dark'?'white':'black'}} onChange={handleonChange} rows="8"></textarea>
       </div>
       <button className= "btn btn-primary mx-2" onClick={handleUpClick} >Convert to uppercase</button>
       <button className= "btn btn-primary mx-2" onClick={handleLoClick} >Convert to lowercase</button>
       <button className= "btn btn-primary mx-2" onClick={handleClClick} >Reverse text</button>
    </div>
    <div className="container" style={{color:props.mode=== 'dark'?'white':'black'}}>
      <h2> Your text summary
      </h2>
      <p>{text.split("").length} words and length {text.length}</p>
      <p>{0.008* text.split("").length} Minutes to read</p>
       <h3>Preview</h3>
       <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
};
 