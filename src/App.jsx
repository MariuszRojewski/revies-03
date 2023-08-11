import React from 'react';
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

// Jest jeszcze fajne prosta opcja z użyciem reszty  z dzielenia.

const App = () => {
  const [index, setIndex] = React.useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
      if(number > people.length -1) {
        return 0
      } 
      if(number < 0) {
        return people.length -1;
      }

      return number;
  }

  const prevPerson = () => {
    setIndex((prevIndex) => {
      // if(prevIndex !== 0) {
      //   const currentIndex = prevIndex - 1;
      //   return currentIndex
      // } else {
      //   return people.length -1
      // }

      const currentIndex = prevIndex - 1;
      return checkNumber(currentIndex)
    })
  }

  const nextPerson = () => {
    setIndex((prevIndex) => {
      // if(prevIndex !== people.length -1) {
      //   const currentIndex = prevIndex + 1;
      //   return currentIndex
      // } else {
      //   return 0
      // }

      const currentIndex = prevIndex + 1;
      return checkNumber(currentIndex)
    })
  }

  const randomPerson = () => {
    const randomNumber = Math.floor(Math.random() * people.length)
    setIndex(randomNumber);
  }

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img"/>
          <span className="quote-icon"><FaQuoteRight /></span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className='btn-container'>
          <button 
            className='prev-btn' 
            onClick={prevPerson}
          >
            <FaChevronLeft />
          </button>
          <button 
            className='next-btn' 
            onClick={nextPerson}
          >
            <FaChevronRight />
          </button>
        </div>
      </article>
      <button 
        className='btn btn-hipster'
        onClick={randomPerson}
      >
        Suprise Me
      </button>
    </main>
  );
};
export default App;
