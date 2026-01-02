import { useEffect, useState } from 'react'

const Popup = (props) => {
  const [show, setShow] = useState(false)

  const closeHandler = () => {
    setShow(false)
    props.onClose(false)
  }

  useEffect(() => {
    setShow(props.show)
  }, [props.show])

  return (
    <div
      style={{
        visibility: show ? 'visible' : 'hidden',
        opacity: show ? '1' : '0',
      }}
      className="opacity-0 fixed z-50 top-0 bottom-0 right-0 left-0 bg-black/20 backdrop-blur-[8px] transition duration-300"
    >
      <div className="border-solid border-2 border-border2 z-[51] my-[70px] mx-auto p-[20px] bg-tertiary text-white rounded-xl w-[350px] sm:w-[500px] relative top-[30%]">
        <h2 className="mt-0 text-white font-black text-[30px]">
          {props.title}
        </h2>
        <span
          className="absolute top-[20px] right-[30px] text-[30px] no-underline text-secondary cursor-pointer hover:text-accent"
          onClick={closeHandler}
        >
          &times;
        </span>
        <div className="text-secondary mt-3 max-h-[30%]">{props.content}</div>
      </div>
    </div>
  )
}

export default Popup
