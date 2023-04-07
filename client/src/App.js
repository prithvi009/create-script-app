import React, {useState} from 'react';
import './App.css';

function App() {

  const [text, setText] = useState('');
  const [file, setFile] = useState('');



  const handleSubmit = async(e)=>{
    e.preventDefault();
    const data = {
      text: text,
      file: file
    }
    console.log(JSON.stringify(data));

    try{
      const response = fetch('http://localhost:5000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      console.log(response.json());
    }
    catch(err){

    }

  }

 

  return (
    <div>
       <form onSubmit={handleSubmit}>
        <div>
            <label >write the prompt to generate code file</label>
            <input type="text" className="text" value={text} onChange ={(e)=> setText(e.target.value)} />
        </div>
        <div>
            <label >write the name of the file to save code In</label>
            <input type="text" className="file" value={file} onChange={(e)=> setFile(e.target.value)}/>
        </div>
        <button type="submit">generate code</button>
    </form>
    </div>
  );
}

export default App;
