"use client"
import React, { useState } from 'react';
import List from './List';

const page = () => {

  const [isBtnVisible, setIsBtnVisible] = useState(true);
  const [isCircleMoved, setIsCircleMoved] = useState(false);
  const [isSubtitleVisible, setIsSubtitleVisible] = useState(true);
  const [isTitleChanged, setIsTitleChanged] = useState(false);
  const [isListVisible, setIsListVisible] = useState(false);

  const handleEnterClick = () => {
    setIsBtnVisible(false);
    setIsSubtitleVisible(false);
    setIsCircleMoved(true);
    setIsTitleChanged(true);
    setTimeout(() => {
      setIsListVisible(true);
    }, 700);
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
      {isListVisible && <List />}
    </div>
    </>
  )
}

export default page