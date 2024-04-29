import React from 'react';

function FlexBox({ imageSrc, text, imageOnRight }) {
    return (
        <div className={`flex ${imageOnRight ? 'flex-row-reverse' : ''} items-center mb-16`}>
            <img className="rounded-full h-32 w-32 object-cover" src={imageSrc} alt="Profile" />
            <div className="ml-4">
                <p className='text-base font-roboto font-normal leading-relaxed tracking-tighter'>{text}</p>
            </div>
        </div>
    );
}

export default FlexBox;