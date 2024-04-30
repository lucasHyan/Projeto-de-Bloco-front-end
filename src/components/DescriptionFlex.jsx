import React from 'react';

function DescriptionFlex({ src, author, date, content, imageOnRight }) {
    return (
        <div className={`flex ${imageOnRight ? 'flex-row-reverse' : ''} items-center mb-16`}>
            <img className="rounded-full h-32 w-32 object-cover" src={src} alt="Profile" />
            <div className="ml-4">
                <h2 className='text-2xl font-bold'>{author}</h2>
                <p className='text-sm text-gray-500'>{date}</p>
                <p className='text-base font-roboto font-normal leading-relaxed tracking-tighter'>{content}</p>
            </div>
        </div>
    );
}

export default DescriptionFlex;