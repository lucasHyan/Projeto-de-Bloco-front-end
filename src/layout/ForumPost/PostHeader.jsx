import React from 'react';
import { FaFlag, FaArrowLeft, FaLink } from 'react-icons/fa';

export function PostHeader({ title, onReport, onBack, onCopyLink }) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div>
        <button className="text-center text-lg" onClick={onReport}>
          <FaFlag className="w-6 h-6 mr-2" />
        </button>
        <button className="text-center text-lg" onClick={onBack}>
          <FaArrowLeft className="w-6 h-6" />
        </button>
        <button className="text-center text-lg" onClick={onCopyLink}>
          <FaLink className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}