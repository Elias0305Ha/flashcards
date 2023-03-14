import { useState } from 'react'
import Card from './Card.jsx'
import './App.css'
import dwayne from '/dwayne.jpg'
import kevin from '/kevin.jpg'
import rihanna from '/rihana.jpg'
import jennifer from '/jennifer.jpg'
import dwayneName from '/dwayne.png'
import kevinName from '/kevin.png'
import rihannaName from '/Rihanna.png'
import jenniferName from '/jennifer.png'






function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  

  const[celebrities, setCelebrities ]= useState( [{"Name": dwayneName, "img": dwayne, "text": "Dwayne Johnson"},
                        {"Name": rihannaName, "img": rihanna, "text": "Rihanna"},
                        {"Name": kevinName, "img": kevin, "text": "Kevin Hurt"},
                        {"Name": jenniferName, "img": jennifer, "text": "Jennifer Lopez"}])

  const [image, setImage] = useState(celebrities[1].img);

  const handleBackward = () => {
    if (isFlipped) {
      handleCardClick()
    }

    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setInputValue('')
      setSubmitStatus(false);
      
    }
  };

  const handleForward = () => {
    if (isFlipped) {
      handleCardClick()
    }
    if (currentIndex != 3) {
      setCurrentIndex(currentIndex + 1);
      setInputValue('')
      setSubmitStatus(false);
    }
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);

  };

  const [inputValue, setInputValue] = useState('');

  const [submitted, setSubmitStatus] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the input value, such as submit it to a server
    setSubmitStatus(true);
  };

  const getInputClassName = () => {
    if (submitted === false) {
      return '';
    } else {
      
      if (inputValue === celebrities[currentIndex].text) {
        
        return 'valid';
      } else {
        
        return 'invalid';
      }
      
    }
    
  };

  function shuffleList(list) {
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      if (i == currentIndex || j == currentIndex) {
        continue;
      }
      [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
  }

  const shuffleCard = () => {
      setCelebrities(shuffleList(celebrities))
      console.log(celebrities)
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setSubmitStatus(false);
  };

  return (
    <div className="App">
      <div className='a'>
        <div className='b'>
          <h1 >Guess the celebrity Challenge</h1>
          <h3>How familiar are you with celebrities? Challenge yourself.<br/>
          </h3>
          <h4>
            Number of cards: 4

          </h4>
        </div>
        
        <div className='CardDiv'>
          <div onClick={handleCardClick}>
            <Card img={isFlipped ? celebrities[currentIndex].Name : celebrities[currentIndex].img}/>

          </div>
          
          <div className='buttonDiv'>
              <button onClick={handleBackward}>
                  <span>&larr;</span> 
              </button>
              <button onClick={handleForward}>
                  <span>&rarr;</span>
              </button>
              <button className="click-effect" onClick={shuffleCard}>
                Shuffle
              </button>

          </div>

          <div className='guessInput'>
            <form onSubmit={handleSubmit}>
              <label>
                Guess:
                <input placeholder='Enter your answer' value={inputValue} className={getInputClassName()} type="text" onChange={handleInputChange} />
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default App