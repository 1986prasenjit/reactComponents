import React, { useState } from "react";
import { Tooltip } from "react-tooltip";

function SpeedDail({position}) {
    let positionClasses = '';
  switch (position) {
    case 'top':
      // Positions at the top center.
      positionClasses = 'fixed top-30 left-1/2 transform -translate-x-1/2';
      break;
    case 'bottom':
      // Positions at the bottom center.
      positionClasses = 'fixed bottom-4 left-1/2 transform -translate-x-1/2';
      break;
    case 'left':
      // Positions at the left center.
      positionClasses = 'fixed left-4 top-1/2 transform -translate-y-1/2';
      break;
    case 'right':
    default:
      // Positions at the right center.
      positionClasses = 'fixed right-4 top-1/2 transform -translate-y-1/2';
      break;
  }
  const [isOpen, setIsOpen] = useState(false);

  const toggleSpeedDial = () => {
    setIsOpen((prev) => !prev);
  };
  const flexClasses = (position === "top") ? "flex flex-row items-end z-50" : "flex flex-col items-end z-50";
  return (
    <>
      <div className={`${positionClasses} ${flexClasses}`}>
        <div className={(position === "top") ? "flex flex-row space-x-3" : "flex flex-col mb-2 space-y-3"}>
          {isOpen && (
            <>
              <button
                className="bg-gray-400 text-white p-3 rounded-full shadow-lg 
                         transform transition duration-300 hover:bg-green-600"
                onClick={() => console.log("Action 1 clicked")}
                id="my-save-element"
              >
                <Tooltip anchorSelect="#my-save-element" content="Save" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                  />
                </svg>
              </button>
              <button
                className="bg-gray-400 text-white p-3 rounded-full shadow-lg 
                         transform transition duration-300 hover:bg-yellow-600"
                onClick={() => console.log("Action 1 clicked")}
                id="my-copy-element"
              >
                <Tooltip anchorSelect="#my-copy-element" content="Copy" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                  />
                </svg>
              </button>
              <button
                className="bg-gray-400 text-white p-3 rounded-full shadow-lg 
                         transform transition duration-300 hover:bg-red-600"
                onClick={() => console.log("Action 2 clicked")}
                id="my-print-element"
              >
                <Tooltip anchorSelect="#my-print-element" content="Print" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z"
                  />
                </svg>
              </button>
              <button
                className="bg-gray-400 text-white p-3 rounded-full shadow-lg 
                         transform transition duration-300 hover:bg-yellow-600"
                onClick={() => console.log("Action 3 clicked")}
                id="my-share-element"
              >
                <Tooltip anchorSelect="#my-share-element" content="Share" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                  />
                </svg>
              </button>
            </>
          )}
        </div>
        <button
          className="bg-blue-300 text-white p-3 rounded-full shadow-xl 
                   transform transition duration-500 ease-in-out hover:bg-blue-600 animate-bounce"
          onClick={toggleSpeedDial}
        >
          {isOpen ? `❌` : `➕`}
        </button>
      </div>
    </>
  );
}

export default SpeedDail;
