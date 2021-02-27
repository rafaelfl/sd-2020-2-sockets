const net = require("net");

const client = net.Socket();

function connectionListener() {
    console.log("Estou conectado!");

    client.write("\n");
    client.write("SUB 1 1\n");
    client.write("SAIR\n");

    client.on("data", function (data) {
        const resposta = data.toString();

        console.log(" >>>> Resultado da operação: " + resposta);
    });


    client.end();
}

client.connect(3000, "www.ecp.ufma.br", connectionListener);