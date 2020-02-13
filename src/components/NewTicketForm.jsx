import React from "react";

function NewTicketForm(){
  const buttonStyle = {
    'width': '50%',
    'height': '50%',
    'border-radius':'5px'
  }
  const buttonBackgroundStyle = {
    'background':'none',
    'border':'none'
  }
  const formStyle = {
    'text-align':'center'
  }
  const inputStyle = {
    'margin-top':'10px',
    'margin-bottom':'10px',
    'width': '50%',
    'height':'30px',
    'border-radius':'5px',
    'font-size':'25px'
  }
  return (
    <div>
      <form style={formStyle}>
        <input style={inputStyle}
          type='text'
          id='names'
          placeholder='Pair Names'/>
          <br/>
        <input style={inputStyle}
          type='text'
          id='location'
          placeholder='Location'/>
          <br/>
        <textarea style={inputStyle}
          id='issue'
          placeholder='Describe your issue.'/>
          <br/>
        <button style={buttonBackgroundStyle} type='submit'><img style={buttonStyle} src="https://i.imgur.com/kqApgTH.png" alt="your a looser"/></button>
      </form>
    </div>
  );
}

export default NewTicketForm;
