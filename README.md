<h1>EatEasy - Sistema de Reservas em Restaurantes</h1>

<h2>Descrição</h2>
<p>
    Este é um sistema de reservas em restaurantes, desenvolvido em TypeScript, que permite que clientes façam reservas,
    avaliem restaurantes e gerentes controlem seus estabelecimentos. O sistema possui as seguintes funcionalidades:
</p>

<h2>Requisitos</h2>
<p>
    - Node.js instalado<br>
    - Biblioteca readline-sync instalada (instale com npm install readline-sync)
</p>

<h2>Execução</h2>
<p>
    1. Baixe os arquivos do projeto.<br>
    2. Abra o terminal e navegue até o diretório do projeto.<br>
    3. Execute npm install para instalar as dependências.<br>
    4. Execute node index.js para iniciar o programa.
</p>

<h2>Uso</h2>
<h2>Menu Cliente</h2>
<ul>
    <li><strong>Cadastrar:</strong> Permite cadastrar um novo cliente.</li>
    <li><strong>Avaliar restaurante:</strong> Permite que um cliente avalie um restaurante.</li>
    <li><strong>Fazer reserva:</strong> Permite que um cliente faça uma reserva.</li>
    <li><strong>Alterar reserva:</strong> Permite que um cliente altere uma reserva existente.</li>
    <li><strong>Cancelar reserva:</strong> Permite que um cliente cancele uma reserva existente.</li>
    <li><strong>Listar reservas:</strong> Exibe as reservas feitas por um cliente.</li>
    <li><strong>Listar restaurantes:</strong> Lista todos os restaurantes disponíveis.</li>
    <li><strong>Listar restaurantes por localização:</strong> Lista restaurantes com base em uma localização.</li>
    <li><strong>Listar restaurantes por cozinha:</strong> Lista restaurantes com base em uma cozinha específica.</li>
    <li><strong>Listar restaurantes por avaliação:</strong> Lista restaurantes com base em uma avaliação específica.</li>
    <li><strong>Listar restaurantes por disponibilidade:</strong> Lista restaurantes disponíveis em uma determinada data e hora.</li>
    <li><strong>Voltar:</strong> Retorna ao menu principal.</li>
</ul>

<h2>Menu Gerente</h2>
<ul>
    <li><strong>Cadastrar Gerente:</strong> Permite cadastrar um novo gerente.</li>
    <li><strong>Cadastrar restaurante:</strong> Permite que um gerente cadastre um novo restaurante.</li>
    <li><strong>Cadastrar mesa:</strong> Permite que um gerente cadastre uma nova mesa em seu restaurante.</li>
    <li><strong>Listar mesas:</strong> Lista as mesas de um restaurante específico.</li>
    <li><strong>Listar avaliações:</strong> Lista as avaliações recebidas por um restaurante.</li>
    <li><strong>Voltar:</strong> Retorna ao menu principal.</li>
</ul>

<h2>Menu Sistema</h2>
<ul>
    <li><strong>Listar Gerentes:</strong> Lista todos os gerentes cadastrados no sistema.</li>
    <li><strong>Listar Clientes:</strong> Lista todos os clientes cadastrados no sistema.</li>
    <li><strong>Listar Restaurantes:</strong> Lista todos os restaurantes cadastrados no sistema.</li>
    <li><strong>Listar avaliações:</strong> Lista todas as avaliações feitas por clientes.</li>
    <li><strong>Filtrar avaliações por restaurante:</strong> Lista avaliações específicas de um restaurante.</li>
    <li><strong>Calcular média de avaliações:</strong> Calcula a média de avaliações de um restaurante.</li>
    <li><strong>Voltar:</strong> Retorna ao menu principal.</li>
</ul>

<p><strong>Observações:</strong> O sistema utiliza a biblioteca readline-sync para interação com o usuário. Para encerrar o programa, basta selecionar a opção "0" no menu principal.</p>
