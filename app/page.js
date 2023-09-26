"use client"
import React, { useState } from 'react';

const page = () => {

  const [isBtnVisible, setIsBtnVisible] = useState(true);
  const [isCircleMoved, setIsCircleMoved] = useState(false);
  const [isSubtitleVisible, setIsSubtitleVisible] = useState(true);
  const [isTitleChanged, setIsTitleChanged] = useState(false);

  const handleEnterClick = () => {
    setIsBtnVisible(false);
    setIsSubtitleVisible(false);
    setIsCircleMoved(true);
    setIsTitleChanged(true);
  };

  return (
    <>
    <div className={`title ${isTitleChanged ? 'changed' : ''}`}>
      To-Do-M
      {isSubtitleVisible && (
      <div className="subtitle">
        ( It's called "Tudum" )
      </div>
      )}
    </div>
    <div onClick={handleEnterClick} className={`circle ${isCircleMoved ? 'moved' : ''}`}>
    {isBtnVisible && (
      <div className="btn">
        Enter
      </div>
    )}
    </div>
    </>
  )
}

export default page