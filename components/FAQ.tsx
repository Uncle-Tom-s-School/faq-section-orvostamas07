import { useContext } from 'react'
import { faqContext } from '../App'
import FAQDropdown from './FAQDropdown'

const FAQ = () => {

  const context = useContext(faqContext)

  return (
    <div className="faqCard">
      <div className="titleBar">
        <img className="star" src="src/assets/images/icon-star.svg"/>
        <h1>FAQs</h1>
      </div>
    <div className="faq-container">
      {context?.map((item, i) => (
          <FAQDropdown
            key={i}
            question={item.question}
            answer={item.answer}
          />
        ))}
    </div>
    </div>
  )
}

export default FAQ