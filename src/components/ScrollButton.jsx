export function ScrollButton({ targetId, children }) {
    const handleClick = () => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <button onClick={handleClick} className="uppercase font-bold tracking-tight opacity-70 text-sm hidden Small-At:block">
            {children}
        </button>
    );
}