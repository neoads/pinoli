import Header from './components/Header';
import pinoliLogoImage from './assets/pinoli_logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container mx-auto p-4">
        <section className="my-8 text-center">
          <img src={pinoliLogoImage} alt="Pinoli Alimentacao Saudavel" className="mx-auto mb-4 w-48 h-48" />
          <h1 className="text-4xl font-bold">Pinoli Alimentacao Saudavel</h1>
          <h2 className="text-2xl mb-8">20.558.897/0001-80</h2>
          <h2 className="text-3xl font-bold mb-4">NOSSA MISSÃO:</h2>
          <p className="text-lg italic max-w-3xl mx-auto">
            "Oferecer alimentação saudável de qualidade superior com ingredientes naturais e excelência no atendimento, proporcionando experiências nutricionais únicas aos nossos clientes. Com mais de 11 anos de tradição no mercado, buscamos superar as expectativas através de produtos orgânicos, receitas balanceadas e atendimento personalizado, sempre com paixão e comprometimento. Nossa missão é levar o melhor da alimentação saudável para sua mesa, criando momentos especiais e sabores nutritivos."
          </p>
        </section>

        <section className="my-8 text-center">
          <h2 className="text-3xl font-bold mb-4">CONTATO:</h2>
          <p className="text-lg">Telefone: (31) 973198749</p>
          <p className="text-lg">E-mail: contate@corssar.com</p>
          <p className="text-lg"><a href="https://www.instagram.com/pizzaabessa/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">INSTAGRAM</a></p>
        </section>

        <section className="my-8 text-center">
          <h2 className="text-3xl font-bold mb-4">QUEM SOMOS?</h2>
          <p className="text-lg max-w-3xl mx-auto text-justify">
            A <strong className="font-bold">Pinoli Alimentacao Saudavel LTDA</strong>, conhecida como <strong className="font-bold">Pinoli</strong>, registrada sob o CNPJ <strong className="font-bold">20.558.897/0001-80</strong>, foi fundada em <strong className="font-bold">04 de julho de 2014</strong>, na cidade de <strong className="font-bold">Brasília, Distrito Federal</strong>. Como uma empresa consolidada no mercado, atuamos no segmento de <strong className="font-bold">alimentação saudável</strong>, oferecendo produtos que unem <strong className="font-bold">nutrição, qualidade e sabor natural</strong> para proporcionar experiências alimentares saudáveis aos nossos clientes.
          </p>
          <p className="text-lg max-w-3xl mx-auto text-justify mt-4">
            Nossa atividade principal, conforme a Receita Federal, é <strong className="font-bold">Comércio Varejista de Produtos Alimentícios (CNAE 47.21-1-03)</strong>, abrangendo desde ingredientes orgânicos até refeições saudáveis que levam nutrição e sabor para sua mesa. Com mais de <strong className="font-bold">11 anos de experiência</strong>, nos destacamos pela <strong className="font-bold">qualidade dos ingredientes naturais, receitas balanceadas e atendimento personalizado</strong>, sempre buscando proporcionar momentos especiais através da alimentação saudável.
          </p>
          <p className="text-lg max-w-3xl mx-auto text-justify mt-4">
            Localizada na <strong className="font-bold">Quadra Shcn Cl Qd 307 Bloco e, SN, Loja 34 Térreo, Asa Norte, Brasília-DF (CEP 70746-550)</strong>, nossa loja é referência no bairro e região, proporcionando uma experiência alimentar completa e saudável. Valorizamos a <strong className="font-bold">nutrição, a qualidade e a satisfação do cliente</strong>, garantindo que cada produto seja selecionado com excelência e carinho.
          </p>
          <p className="text-lg max-w-3xl mx-auto text-justify mt-4">
            Na <strong className="font-bold">Pinoli</strong>, acreditamos que <strong className="font-bold">a boa alimentação reflete o cuidado com a saúde</strong>. Por isso, nosso compromisso vai além da venda de alimentos: queremos criar momentos especiais através da <strong className="font-bold">nutrição, bem-estar e sabor natural</strong>, seja para uma refeição em família, um encontro com amigos ou uma celebração especial.
          </p>
        </section>

        <section className="my-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Produtos e Serviços Disponíveis:</h3>
          <ul className="list-disc list-inside text-lg text-left">
            <li><strong className="font-bold">Alimentos Orgânicos</strong> – Produtos naturais que combinam <strong className="font-bold">ingredientes orgânicos, qualidade nutricional e sabor natural</strong>.</li>
            <li><strong className="font-bold">Suplementos Naturais</strong> – Variedade de suplementos e produtos naturais para uma vida mais saudável.</li>
            <li><strong className="font-bold">Bebidas Funcionais</strong> – Seleção completa de bebidas naturais e funcionais para seu bem-estar.</li>
            <li><strong className="font-bold">Consultoria Nutricional</strong> – Experiência alimentar completa com o cuidado e tradição da Pinoli.</li>
          </ul>
        </section>

        <section className="my-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Informações da Empresa:</h3>
          <ul className="list-disc list-inside text-lg text-left">
            <li><strong className="font-bold">Razão Social:</strong> Pinoli Alimentacao Saudavel LTDA</li>
            <li><strong className="font-bold">Nome Fantasia:</strong> Pinoli</li>
            <li><strong className="font-bold">CNPJ:</strong> 20.558.897/0001-80</li>
            <li><strong className="font-bold">Data de Abertura:</strong> 04/07/2014</li>
            <li><strong className="font-bold">Porte:</strong> Empresa de Pequeno Porte</li>
            <li><strong className="font-bold">Natureza Jurídica:</strong> Sociedade Empresária Limitada</li>
            <li><strong className="font-bold">Opção pelo MEI:</strong> Não</li>
            <li><strong className="font-bold">Opção pelo Simples:</strong> Não</li>
            <li><strong className="font-bold">Data opção Simples:</strong> 04/07/2014 (Excluído em 30/06/2024)</li>
            <li><strong className="font-bold">Situação Cadastral:</strong> Ativa</li>
            <li><strong className="font-bold">Data Situação Cadastral:</strong> 04/07/2014</li>
            <li><strong className="font-bold">Tipo:</strong> Matriz</li>
            <li><strong className="font-bold">Capital Social:</strong> R$ 42.000,00</li>
            <li><strong className="font-bold">Inscrição Estadual (DF):</strong> 07.456.789-0</li>
          </ul>
        </section>

        <section className="my-8 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Localização e Contato:</h3>
          <p className="text-lg">📍 <strong className="font-bold">Endereço:</strong> Quadra Shcn Cl Qd 307 Bloco e, SN, Loja 34 Térreo, Asa Norte, Brasília-DF, <strong className="font-bold">CEP 70746-550</strong></p>
          <p className="text-lg">📞 <strong className="font-bold">Telefone/WhatsApp:</strong> <a href="https://wa.me/5531973198749" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">(31) 973198749</a></p>
          <p className="text-lg mt-4">Na <strong className="font-bold">Pinoli</strong>, estamos prontos para proporcionar a você <strong className="font-bold">uma experiência alimentar saudável</strong>. Visite nossa loja e descubra como <strong className="font-bold">mais de 11 anos de tradição podem transformar sua alimentação em um momento especial!</strong> 🥗✨</p>
        </section>

        <section className="my-8 text-center">
          <a href="https://wa.me/5531973198749" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"><h2 className="text-3xl font-bold mb-4">Fale conosco:</h2></a>
          {/* Formulário de contato ou link para WhatsApp */}
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-8 mt-8">
        <div className="container mx-auto max-w-3xl">
          <h3 className="text-xl font-bold mb-4">RODAPÉ & POLÍTICA DE PRIVACIDADE</h3>
          <h4 className="text-lg font-bold mb-2">Pinoli Alimentacao Saudavel LTDA</h4>
          <p className="text-sm"><strong>CNPJ:</strong> 20.558.897/0001-80</p>
          <p className="text-sm"><strong>Razão Social:</strong> PINOLI ALIMENTACAO SAUDAVEL LTDA</p>
          <p className="text-sm"><strong>Data de Abertura:</strong> 04/07/2014</p>
          <p className="text-sm"><strong>Porte:</strong> Empresa de Pequeno Porte</p>
          <p className="text-sm"><strong>Natureza Jurídica:</strong> Sociedade Empresária Limitada</p>
          <p className="text-sm"><strong>Situação Cadastral:</strong> Ativa</p>
          <p className="text-sm"><strong>Tipo:</strong> Matriz</p>
          <p className="text-sm"><strong>Capital Social:</strong> R$ 42.000,00</p>
          <p className="text-sm"><strong>Endereço:</strong> Quadra Shcn Cl Qd 307 Bloco e, SN, Loja 34 Térreo, Asa Norte, Brasília-DF</p>
          <p className="text-sm"><strong>CEP:</strong> 70746-550</p>
          <p className="text-sm"><strong>E-mail:</strong> contate@corssar.com</p>
          <p className="text-sm"><strong>Telefone/WhatsApp:</strong> (31) 973198749</p>
          <p className="text-sm italic mt-4">Alimentação saudável e bem-estar desde 2014</p>

          <h4 className="text-lg font-bold mt-8 mb-2">POLÍTICA DE PRIVACIDADE</h4>
          <p className="text-sm"><strong>Pinoli Alimentacao Saudavel LTDA</strong></p>
          <p className="text-sm"><strong>CNPJ:</strong> 20.558.897/0001-80</p>
          <p className="text-sm"><strong>Endereço:</strong> Quadra Shcn Cl Qd 307 Bloco e, SN, Loja 34 Térreo, Asa Norte, Brasília-DF, CEP 70746-550</p>

          <h5 className="text-md font-bold mt-4 mb-2">1. Finalidade</h5>
          <p className="text-sm">Esta política descreve como coletamos, utilizamos e protegemos os dados pessoais dos clientes que interagem conosco por meio de WhatsApp, e-mail, telefone, redes sociais ou durante visitas à nossa loja de alimentação saudável.</p>

          <h5 className="text-md font-bold mt-4 mb-2">2. Dados Coletados</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li><strong className="font-bold">Informações fornecidas voluntariamente:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Nome, telefone, e-mail, endereço (para orçamentos ou entregas).</li>
                <li>Preferências alimentares e necessidades nutricionais.</li>
              </ul>
            </li>
            <li><strong className="font-bold">Dados automáticos:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Registro de interações para atendimento e melhoria de serviços.</li>
                <li>Dados de navegação (se aplicável a site ou redes sociais).</li>
              </ul>
            </li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">3. Uso de WhatsApp, Telefone e E-mail</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li><strong className="font-bold">Finalidades:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Atendimento ao cliente, consulta de produtos saudáveis, orientações nutricionais e confirmação de entregas.</li>
                <li>Não enviamos mensagens promocionais não solicitadas sem consentimento.</li>
              </ul>
            </li>
            <li><strong className="font-bold">Armazenamento:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Dados de contato e interações são armazenados por <strong className="font-bold">12 meses</strong>, exceto quando exigido por lei.</li>
              </ul>
            </li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">4. Compartilhamento de Dados</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li>Não comercializamos ou compartilhamos dados com terceiros para fins publicitários.</li>
            <li><strong className="font-bold">Exceções:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Parceiros de logística (apenas informações necessárias para entrega).</li>
                <li>Autoridades legais, mediante requisição formal.</li>
              </ul>
            </li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">5. Direitos do Usuário (LGPD)</h5>
          <p className="text-sm">Você pode solicitar:</p>
          <ul className="list-disc list-inside text-sm ml-4">
            <li>Acesso ou correção dos seus dados.</li>
            <li>Exclusão (exceto quando a lei exigir retenção).</li>
            <li>Revogação de consentimento (via e-mail ou telefone).</li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">6. Segurança</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li>Dados protegidos com acesso restrito à equipe autorizada.</li>
            <li>Não solicitamos informações sensíveis (como CPF ou cartões de crédito) por mensagens não criptografadas.</li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">7. Alterações nesta Política</h5>
          <p className="text-sm">Atualizações serão comunicadas em nossos canais oficiais.</p>

          <h5 className="text-md font-bold mt-4 mb-2">8. Contato</h5>
          <p className="text-sm">Dúvidas ou solicitações sobre seus dados?</p>
          <ul className="list-disc list-inside text-sm ml-4">
            <li><strong className="font-bold">WhatsApp:</strong> (31) 973198749</li>
            <li><strong className="font-bold">E-mail:</strong> contate@corssar.com</li>
          </ul>
          <p className="text-sm mt-4">© 2024 Pinoli - Alimentacao Saudavel. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

