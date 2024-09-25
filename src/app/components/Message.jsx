import React, { useState } from "react";
import format from "date-fns/format";
import Image from "next/image";

const Message = ({ message }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(message.text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <>
      {message.createdAt && (
        <div className="bg-[#e6e9ef] dark:bg-[#1e1e2e] my-2 p-4 flex flex-col rounded-2xl w-full md:w-3/4 lg:w:2/3 xl:w-3/5 2xl:w-1/2">
          <div className="flex flex-row">
            <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M83.59 77.906A43.716 43.716 0 1 0 6.25 50a43.43 43.43 0 0 0 10.16 27.906l-.063.052c.219.264.469.49.695.748.28.323.582.625.875.94.875.948 1.773 1.86 2.718 2.718.286.26.583.504.875.756 1 .862 2.027 1.678 3.094 2.441.138.098.26.217.399.315v-.04a43.44 43.44 0 0 0 50 0v.039c.139-.098.26-.217.399-.314a44 44 0 0 0 3.093-2.442c.293-.25.59-.496.875-.755a44 44 0 0 0 2.72-2.719c.29-.314.59-.616.874-.94.225-.258.476-.483.695-.748zM50 25a14.062 14.062 0 1 1 0 28.125A14.062 14.062 0 0 1 50 25M25.022 77.906A15.61 15.61 0 0 1 40.625 62.5h18.75a15.61 15.61 0 0 1 15.603 15.406 37.313 37.313 0 0 1-49.956 0" fill="#B4BEFE" />
            </svg>
            <div className="ml-2.5 flex items-center break-all whitespace-pre-wrap">
              {message.text}
            </div>
          </div>
          <div className="flex flex-row justify-between mt-2">
            <p className="flex items-center text-xs">
              {format(
                new Date(message.createdAt.seconds * 1000),
                "MMMM d, hh:mm a"
              )}
            </p>
            <button
              className="bg-none border-none rounded ease-in duration-200 hover:brightness-75"
              onClick={handleCopy}
              disabled={isCopied}
            >
              {isCopied ? (
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  className="text-[#40a02b] dark:text-[#a6e3a1]"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.063 5.674a1 1 0 0 1 .263 1.39l-7.5 11a1 1 0 0 1-1.533.143l-4.5-4.5a1 1 0 1 1 1.414-1.414l3.647 3.646 6.82-10.002a1 1 0 0 1 1.39-.263Z" />
                </svg>
              ) : (
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  className="text-[#40a02b] dark:text-[#a6e3a1]"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 4a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2ZM8.535 4A3.998 3.998 0 0 1 12 2c1.48 0 2.773.804 3.465 2H17a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1.535ZM8 6H7a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-1a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2Z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Message;
