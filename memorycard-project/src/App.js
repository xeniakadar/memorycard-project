import React, {useState} from 'react'
import Cards from './Components/Cards';
import Header from './Components/Header';
import uniqid from 'uniqid'

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [allImages, setAllImages] = useState([
    { title: 'George is surprised', src: './images/bush.jpeg', isClicked: false, id: uniqid()},
    {title: 'Dog wearing pearls', src: './images/dog-pearls.png', isClicked: false, id: uniqid()},
    {title: 'Dog with procelain cup', src: './images/dog-procelain-cup.png', isClicked: false, id: uniqid()},
    {title: 'Otter wearing pearls', src: './images/otter-pearls.png', isClicked: false, id: uniqid()},
    {title: 'Rat eating brie', src: './images/rat-eating-brie.png', isClicked: false, id: uniqid()},
  ])

  // give each image an isClicked property
  //if click --> isClicked: true
  // if click on an item that is isClicked: true, console.log(":(")
  //     and all items isClicked: false

  function randomizeImages() {
    const newArray = [...allImages]
    setAllImages(() => {
      (newArray.sort(() => Math.random() - 0.5))
      return newArray
    })
  }



  return (
    <div>
      <Header />
      <Cards allImages={allImages} handleClick={randomizeImages} />
    </div>
  )
}

export default App;
