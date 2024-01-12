# EatEasy-Trabalho-Avaliativo-POO

# Sistema de Reservas em Restaurantes

**Descrição:**
Este é um sistema de reservas em restaurantes, desenvolvido em TypeScript, que permite que clientes façam reservas, avaliem restaurantes e gerentes controlem seus estabelecimentos. O sistema possui as seguintes funcionalidades:

Cadastro de clientes, gerentes, restaurantes e mesas.
Avaliação de restaurantes por clientes.
Reserva de mesas em restaurantes por clientes.
Alteração e cancelamento de reservas por clientes.
Gerenciamento de restaurantes por gerentes, incluindo cadastro de mesas.
Listagem de clientes, gerentes, restaurantes, avaliações e reservas.
Filtros para buscar restaurantes por localização, cozinha, avaliação e disponibilidade.
Cálculo da média de avaliações de um restaurante.
Filtragem de avaliações por restaurante.
Requisitos
Node.js instalado
Biblioteca readline-sync instalada (instale com npm install readline-sync)
Execução
Baixe os arquivos do projeto.
Abra o terminal e navegue até o diretório do projeto.
Execute npm install para instalar as dependências.
Execute node index.js para iniciar o programa.
Uso
O programa possui um menu principal com opções para clientes, gerentes e para o sistema em geral. Cada opção do menu leva a submenus específicos.

**Menu Cliente**
Cadastrar: Permite cadastrar um novo cliente.
Avaliar restaurante: Permite que um cliente avalie um restaurante.
Fazer reserva: Permite que um cliente faça uma reserva.
Alterar reserva: Permite que um cliente altere uma reserva existente.
Cancelar reserva: Permite que um cliente cancele uma reserva existente.
Listar reservas: Exibe as reservas feitas por um cliente.
Listar restaurantes: Lista todos os restaurantes disponíveis.
Listar restaurantes por localização: Lista restaurantes com base em uma localização.
Listar restaurantes por cozinha: Lista restaurantes com base em uma cozinha específica.
Listar restaurantes por avaliação: Lista restaurantes com base em uma avaliação específica.
Listar restaurantes por disponibilidade: Lista restaurantes disponíveis em uma determinada data e hora.
Voltar: Retorna ao menu principal.
**Menu Gerente**
Cadastrar Gerente: Permite cadastrar um novo gerente.
Cadastrar restaurante: Permite que um gerente cadastre um novo restaurante.
Cadastrar mesa: Permite que um gerente cadastre uma nova mesa em seu restaurante.
Listar mesas: Lista as mesas de um restaurante específico.
Listar avaliações: Lista as avaliações recebidas por um restaurante.
Voltar: Retorna ao menu principal.
**Menu Sistema**
Listar Gerentes: Lista todos os gerentes cadastrados no sistema.
Listar Clientes: Lista todos os clientes cadastrados no sistema.
Listar Restaurantes: Lista todos os restaurantes cadastrados no sistema.
Listar avaliações: Lista todas as avaliações feitas por clientes.
Filtrar avaliações por restaurante: Lista avaliações específicas de um restaurante.
Calcular média de avaliações: Calcula a média de avaliações de um restaurante.
Voltar: Retorna ao menu principal.
**Observações**
O sistema utiliza a biblioteca readline-sync para interação com o usuário.
Para encerrar o programa, basta selecionar a opção "0" no menu principal.
