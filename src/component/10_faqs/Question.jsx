import React from 'react'
import { PlusIcon } from '@heroicons/react/24/solid'

const Question = ({question}) => {
  return (
    <div className='flex justify-between items-center border-b-black border-b-[1px] py-2'>
      <p className='pr-8'>{question}</p>
      <div className='h-5 w-5 font-bold text-green hover:text-orange'> <PlusIcon/></div>
    </div>
  )
}

export default Question
