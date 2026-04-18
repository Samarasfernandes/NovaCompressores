import './IBotoes.css';

export default function Bts() {
  return (
    <div className="buttons">
      <a
        href="/catalogo.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-pdf"
      >
        <i className="fa-solid fa-file-pdf"></i>
        Baixe nosso catálogo
      </a>

      <a
        href="https://wa.me/556793498779"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-whatsapp"
      >
        <i className="fa-brands fa-whatsapp"></i>
        Fale com um especialista
      </a>
    </div>
  );
}
