import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");

    }
    const handleLcClick = ()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");

    }
    const handleClearClick = ()=>{
      let newText='';
      setText(newText)
      props.showAlert("Text is cleared","success");

  }
    const handleInvertCase=()=>{
      let newText='';
      for (var i = 0; i < text.length; i++)
    {
        if(text[i]===' ')
        {
        newText=newText+text[i];
        continue;
        }
        if (text[i] >= 'a' && text[i] <= 'z')
            // Convert lowercase to uppercase
            newText=newText+String.fromCharCode(text.charCodeAt(i) - 32)            
        else if (text[i] >= 'A' && text[i] <= 'Z')
            // Convert uppercase to lowercase
            newText=newText+String.fromCharCode(text.charCodeAt(i) + 32)          
    }
    setText(newText);
    props.showAlert("Inverted case","success");

    }
    const handleCopyText=()=>{
      let text=document.getElementById("exampleFormControlTextarea1");
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text is copied","success");

    }
    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces are removed","success");

    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    
    const[text,setText]=useState('');
    const countWords=(text)=>{
      if (text.length===0)
      return 0;
      return text.split(" ").filter((element)=>{return element.length!==0}).length;
    }
  return (
    <div className="form-group">
          <h2 className="mb-0" style={{color:props.mode==='light'?'black':'white'}}>Enter your text to analyze</h2>
    <br></br>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}} placeholder="Enter your text here" ></textarea>
    <br></br>
    <div className='container'>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button> 
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLcClick}>Convert to LowerCase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleInvertCase}>Invert Case</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopyText}>Copy Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    </div>
    <div className='container my-4'>
      <h2 style={{color:props.mode==='light'?'black':'white'}}>Your Text Summary</h2>
      <p style={{color:props.mode==='light'?'black':'white'}}>{countWords(text)} words and {text.length} characters</p>
      <p style={{color:props.mode==='light'?'black':'white'}}>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
      <h2 style={{color:props.mode==='light'?'black':'white'}}>Preview</h2>
      <p style={{color:props.mode==='light'?'black':'white'}}>{text.length>0?text:"Enter your text above to preview it here"}</p>
    </div>
  </div>
  )
}
