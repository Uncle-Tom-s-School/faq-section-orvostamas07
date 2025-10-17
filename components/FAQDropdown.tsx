import { useState } from "react";

type DropdownProps = {
    question: string,
    answer: string
}

const FAQDropdown = (props: DropdownProps) => {

  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className="question-answer-container">
        <div className="question-and-button">
            <h2 className='question'>{props.question}</h2>
            <div className="dropdown-toggle-button" onClick={toggle} style={{backgroundImage: !isOpen ? "url(src/assets/images/icon-plus.svg)" : "url(src/assets/images/icon-minus.svg)"}}></div>
        </div>
        {isOpen && <div className="answer">{props.answer}</div>}
    </div>
  )
}

export default FAQDropdown