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
  const [currentIndex, setCurrentIndex] = useState(1);
  const [currentView, setCurrentView] = useState("img");
  const [isFlipped, setIsFlipped] = useState(false);
  

  const celebrities = {1:{"Name": dwayneName, "img": dwayne},
                        2:{"Name": rihannaName, "img": rihanna},
                        3:{"Name": kevinName, "img": kevin},
                        4:{"Name": jenniferName, "img": jennifer}}

  const [image, setImage] = useState(celebrities[1].img);

  const handleBackward = () => {
    if (isFlipped) {
      handleCardClick()
    }

    if (currentIndex > 1) {
      setCurrentIndex(currentIndex - 1);
      setImage(celebrities[currentIndex].img)
    }
  };

  const handleForward = () => {
    if (isFlipped) {
      handleCardClick()
    }
    if (currentIndex != 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);

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
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default App