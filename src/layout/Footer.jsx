export function Footer() {
  return (
    <footer className="flex  p-4 bg-primary">
      <a href="/" className="px-3 hover:underline">
        <span className="text-highlight font-roboto">Home</span>
      </a>
      <a href="/blog" className="px-3 hover:underline">
        <span className="text-highlight font-roboto">Acessar o blog</span>
      </a>
      <a href="/contact" className="px-3 hover:underline">
        <span className="text-highlight font-roboto">Realizar contato</span>
      </a>
      <a href="/about" className="px-3 hover:underline">
        <span className="text-highlight font-roboto">Saiba mais</span>
      </a>
    </footer>
  );
}
