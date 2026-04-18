import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo */}
        <div className="footer-logo">
          <img src="/icone.png" alt="icone" />
        </div>

        {/* Contato */}
        <div className="footer-column">
          <h3>Contato</h3>
          <p><strong>Telefone:</strong> (67) 996645718</p>
          <p>Novacompressores@terra.com.br</p>
          <p>
            <strong>Endereço:</strong><br />
            Rua Neivo Carlos da Silva, nº 163<br />
            CEP 79750000 | Nova Andradina-MS
          </p>
        </div>

        {/* Links úteis */}
        <div className="footer-column">
          <h3>Links Úteis</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/sobre">Sobre nós</a></li>
            <li><a href="/servicos">Serviços</a></li>
            <li><a href="/produtos">Produtos</a></li>
            <li><a href="/contato">Contato</a></li>
          </ul>
        </div>

        {/* Serviços */}
        <div className="footer-column">
          <h3>Serviços</h3>
          <ul>
            <li>Manutenção</li>
            <li>Calderarias</li>
            <li>Lavadora</li>
            <li>Conserto</li>
             <li>Compressores</li>
          </ul>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className="footer-bottom">
        <p>
          © 2026 Nova Compressores LTDA. Todos os direitos reservados.
          <span> Desenvolvido por Samara Sona</span>
        </p>
      </div>
    </footer>
  );
}
