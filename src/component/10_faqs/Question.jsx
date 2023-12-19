import React from 'react'
import { useState, useRef, useEffect } from 'react'
import autoAnimate from '@formkit/auto-animate'
import { PlusIcon } from '@heroicons/react/24/solid'

const Question = ({question, answer}) => {
  const [isOpen, setIsOpen] = useState(false);
  const parent = useRef(null)

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className=' border-b-[#9E9E9E] border-b-[1px] py-2 ' ref={parent}>
      <div className='grid grid-cols-[1fr_25px]'>
        <p className='pr-8'>{question}</p>
        <div className='h-5 w-5 font-bold text-green hover:text-orange' onClick={toggleAccordion}> <PlusIcon/></div>
      </div>
      {/* <p className='text-medium leading-9 tracking-wider text-[#828282] h-0 overflow-hidden'>{answer}</p> */}
      {isOpen && <p className='text-medium leading-6  tracking-wide py-4 text-[#828282]'>{answer}</p>}
    </div>
  )
}

export default Question
