import React, {useState} from 'react'
import Cards from './Components/Cards';
import Header from './Components/Header';
import uniqid from 'uniqid'
import Confetti from 'react-confetti'

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [allImages, setAllImages] = useState([
    {
      title: 'Dog wearing pearls',
    src: './images/dog-pearls.png',
    isClicked: false,
    id: uniqid()
  },
    {
      title: 'Dog with procelain cup',
    src: './images/dog-procelain-cup.png',
    isClicked: false,
    id: uniqid()
  },
    {
      title: 'Otter wearing pearls',
    src: './images/otter-pearls.png',
    isClicked: false,
    id: uniqid()
  },
    {
      title: 'Rat eating brie',
    src: './images/rat-eating-brie.png',
    isClicked: false,
    id: uniqid()
  },
    {
      title: 'Distinguished Cat',
    src: './images/cat-dress.png',
    isClicked: false,
    id: uniqid()
  },
    {
      title: 'An elephant and a giraffe having a heated debate',
    src: './images/elephant-giraffe.png',
    isClicked: false,
    id: uniqid()
  },
    {
      title: 'A dolphin doing science',
    src: './images/dolphin.png',
    isClicked: false,
    id: uniqid()
  },
    {
      title: 'A tiger making tea',
    src: './images/tiger.png',
    isClicked: false,
    id: uniqid()
  },
    {
      title: 'A royal owl',
    src: './images/owl.png',
    isClicked: false,
    id: uniqid()
  },
  ])

  // give each image an isClicked property
  //if click --> isClicked: true
  // if click on an item that is isClicked: true, console.log(":(")
  //     and all items isClicked: false

  function resetScore() {
    for (let i = 0; i < allImages.length; i++) {
      allImages[i].isClicked = false;
    }
    setCurrentScore(0)
  }

  function checkBestScore() {
    if (currentScore > bestScore) {
      setBestScore(currentScore)
    }
  }

  function randomizeImages() {
    const newArray = [...allImages]
    setAllImages(() => {
      (newArray.sort(() => Math.random() - 0.5))
      return newArray
    })
  }

  function handleClick(idImage) {
    randomizeImages();

    for (let i = 0; i < allImages.length; i++) {
      if (allImages[i].id === idImage && allImages[i].isClicked === false) {
        allImages[i].isClicked = true;
        setCurrentScore(currentScore + 1)
      } else if (allImages[i].id === idImage && allImages[i].isClicked === true) {
        checkBestScore();
        resetScore();
      }
    }
  }



  return (
    <div>
      {currentScore === allImages.length && <Confetti />}
      <Header currentScore={currentScore} bestScore={bestScore} allImages={allImages} />
      <Cards allImages={allImages} handleClick={handleClick} />
    </div>
  )
}

export default App;
