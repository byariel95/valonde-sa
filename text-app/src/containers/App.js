import React ,{useState} from 'react';
import AddText from '../components/AddText';
import TextGrid from '../components/TextGrid';

const App = () => {

  const [inputValue, setinputValue] = useState([])
  return (
    <>
      <AddText setinputValue={setinputValue}/>
      
      <div className="back">
        <div className="container">
          <div className="d-flex justify-content-center align-items-center">
            <div className="card w-100 mt-4">
              <div className="card-body">
                <h2 className="card-title">Results: </h2>
                {inputValue.map((texto)=> (
                  <TextGrid inputValue={texto} key={texto}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
