# Sistemas Distribuídos 2020.2 - Sockets com Node.js

## Introdução

Quando se fala em SDs, existem dois principais paradigmas:
 - **Cliente/Servidor:**
   - Existe uma hierarquia: o cliente solicita serviços e o servidor fornece serviços
   - Servidor sempre precisa estar "no ar" escutando mensagens pela rede e, ao receber uma conexão, deve fornecer os serviços que forem solicitados.

 - **P2P (Peer-to-Peer):**
   - Não há hierarquia
   - Todos os nós são chamados de *servents* (server + client)
   - Hora solicitam serviços, hora fornecem serviços
   - Ex: Bitorrent

## Sockets com Node.js

**NÃO CONFUNDIR SOCKETS COM WEBSOCKETS OU SOCKET.IO**

Nós vamos implementar nossos próprios protocolos de rede utilizando o pacote "net" do Node.js

Um aspecto muito importante do Node.js é que ele é *single threaded* (roda em uma única thread)

**Arquitetura Multithread**

  |SDispatcher| - *Escuta em uma porta de rede e despacha os trabalhos para as worker threads  <--- conexão de rede*
   |___|SThread| - *ao receber a conexão de rede, o processo do servidor cria uma worker thread*

**Arquitetura Singlethread**
  |ThreadP + F1 + F2 + ...| - *Thread principal que associa a ocorrência de determinados eventos a funções no código*
  