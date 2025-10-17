import { createContext, useEffect, useState } from "react"
import FAQ from "./components/FAQ";


type FaqItem = { 
  question: string; 
  answer: string 
}
type FaqList = FaqItem[];

export const faqContext = createContext<FaqList | undefined>(undefined)

const App = () => {

  const [faq, setFaq] = useState<FaqList>()

  useEffect(() => {
    fetch("data.json")
      .then(res => res.json())
      .then((data: FaqList) => setFaq(data))
  }, [])

  return (
    <main>
      <div className="bg-image"></div>
      <div className="content">
        <faqContext.Provider value={faq}>
          <FAQ />
        </faqContext.Provider>
      </div>

    </main>
  )
}

export default App