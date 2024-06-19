import React from 'react';
import { FaFlag, FaArrowLeft, FaLink } from 'react-icons/fa';

export function PostHeader({ title, onReport, onBack, onCopyLink }) {
  return (
    <div className="flex items-center justify-between ">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="flex">
        <button className="text-center text-lg mx-1" onClick={onReport}>
          <FaFlag className="text-lg" />
        </button>
        <button className="text-center text-lg mx-1" onClick={onCopyLink}>
          <FaLink className="text-lg" />
        </button>
        <button className="text-center text-lg mx-1" onClick={onBack}>
          <FaArrowLeft className="text-lg" />
        </button>
      </div>
    </div>
  );
}