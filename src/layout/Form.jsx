export function Form() {
    return (
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto m-1">
            <h2 className="text-5xl font-normal leading-tight text-main-color">Deixe um comentário</h2>
            <form className="grid grid-rows-1 grid-cols-1 w-full font-roboto gap-1" style={{gridTemplateAreas: 
                `"message message"`}}>
                <textarea name="message" placeholder="Seu comentário" className="w-full px-3 border focus:border-main-color focus:outline-none " style={{gridArea: 'message'}}></textarea>
            </form>
            <input type="submit" value="Comentar" className="ml-auto px-4 py-2 border bg-main-color hover:bg-dark-color focus:border-main-color focus:outline-none m-1 text-xs font-medium leading-7 rounded-md cursor-pointer shadow-md min-w-16 tracking-widest uppercase" />
        </div>
    );
}