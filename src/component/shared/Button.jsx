import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

function Dot(props) {
  return (
    <button type="button">
      <svg className="h-2.5 w-2.5 md:h-4 md:w-4" width="9" height="8" viewBox="0 0 9 8" xmlns="http://www.w3.org/2000/svg" >
        <circle cx="4.50411" cy="3.99996" r="3.83809" fill={props.isActive ? '#16A34A' : '#B9B9B9'} />
      </svg>
    </button>
  )
}

function Number(props) {
  return (
    <button style={{ color: props.isActive ? '#008C41' : '#B9B9B9' }} className="font-bold hover:text-[#F97316] lg:text-xl" type="button" >
      {props.number}
    </button>
  )
}

function Button(props) {
  return (
    <button className="button-transition group h-min self-center rounded-full border-2 border-[#008C3C] hover:border-[#F97316] " type="button" {...props} >
      {props.children}
    </button>
  )
}
export function RightArrow(props) {
  return (
    <Button {...props}>
      <ChevronRightIcon className="button-transition h-7 w-7 text-[#008C3C] group-hover:text-[#F97316] lg:h-9 lg:w-9" />
    </Button>
  )
}

export function LeftArrow(props) {
  return (
    <Button {...props}>
      <ChevronLeftIcon className="button-transition h-7 w-7 text-[#008C3C] group-hover:text-[#F97316] lg:w-9 lg:h-9" />
    </Button>
  )
}

export function ButtonGroup(props) {
  return (
    <>
      <LeftArrow onClick={props.prev} />

      <div className="flex gap-4">
        {props.navigation === 'dots' &&
          props.list.map((_, index) => (
            <Dot
              onClick={() => props.changeCurrent(index)}
              key={index}
              isActive={index === props.currentlySelected}
            />
          ))}
        {props.navigation === 'number' &&
          props.list.map((_, index) => (
            <Number
              onClick={() => props.changeCurrent(index)}
              key={index}
              number={index + 1}
              isActive={index === props.currentlySelected}
            />
          ))}
      </div>

      <RightArrow onClick={props.next} />
    </>
  )
}

export function DownloadAppButton(props){
  return(
    <button className='bg-[#00000040] flex justify-center items-center gap-5 py-[11px] px-8 rounded-full hover:bg-black'>
      <img src={props.icon} alt="google" className='w-9 h-9'/>
      <div className='text-white self-center flex flex-col items-start '>
        <p className='text-[10px] font-medium'>{props.avail}</p>
        <h1 className={`font-medium text-xl ${props.store == "Apple Store"?"":"uppercase"}`}>{props.store}</h1>
      </div>
    </button>
  )
}
