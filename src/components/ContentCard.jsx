import React from 'react';

export function ContentCard({ image, title, paragraph, onClick }) {
    return (
        <div onClick={onClick} className="rounded overflow-hidden shadow-lg h-64 flex flex-col justify-start items-start bg-white hover:bg-gray-200 transition-colors duration-200 ease-in-out cursor-pointer">
            <div style={{ backgroundImage: `url(${image})`, height: '140px' }} className="w-full bg-cover" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-highlight">{title}</div>
                <p className="text-gray-700 text-base">{paragraph}</p>
            </div>
        </div>
    );
}

