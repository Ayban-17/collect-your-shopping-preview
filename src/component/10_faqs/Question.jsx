import React from 'react'

const Question = ({question}) => {
  return (
    <div className='flex justify-between items-center border-b-black border-b-[1px] py-2'>
      <p className='pr-8'>{question}</p>
      <img src="/assets/10_faqs/plus.svg" alt="plus" className="" />
    </div>
  )
}

export default Question
