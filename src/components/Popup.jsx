import { useEffect, useState } from "react";

const Popup = (props) => {
  const [show, setShow] = useState(false);

  const closeHandler = () => {
    setShow(false);
    props.onClose(false);
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <div
      style={{visibility: show ? "visible" : "hidden", opacity: show ? "1" : "0"}}
      className="opacity-0 fixed z-50 top-0 bottom-0 right-0 left-0 bg-black-rgba transition duration-500"
    >
        <div className="border-solid border-2 border-[#3b947b] z-[51] my-[70px] mx-auto p-[20px] bg-tertiary text-white rounded-xl xl:w-[600px] lg:w-[500px] md:w-[450px] sm:w-[300px] w-[300px] relative top-[30%]">
            <h2 className="mt-0 text-white font-black text-[30px]">{props.title}</h2>
            <span
                className="absolute top-[20px] right-[30px] text-[30px] no-underline text-secondary cursor-pointer hover:text-[#00e7a6]"
                onClick={closeHandler}
            >
                &times;
            </span>
            <div className="text-secondary mt-3 max-h-[30%]">
                {props.content}
            </div>
        </div>
    </div>
  );
};

export default Popup;
