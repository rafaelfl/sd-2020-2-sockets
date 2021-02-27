const net = require("net");

/*
 * Servidor que realiza operações matemáticas!
 *
 * Operação SOMA:
 * ex: SOMA NUM1 NUM2
 * Resultado: NUM1+NUM2
 */
function connectionListener(socket) {
    socket.on("data", function (data) {
        const s = data.toString().trim();

        console.log(" >>>> " + s);
        const parametros = s.split(" ");

        const commando = parametros[0];
        const param1 = parseInt(parametros[1]);
        const param2 = parseInt(parametros[2]);

        console.log(" >>> " + commando);
        console.log(" >>> " + param1);
        console.log(" >>> " + param2);

        var res = 0;

        switch (commando) {
            case "SOMA":
                res = param1+param2;
                socket.write(res.toString());
                break;
            case "SUB":
                res = param1-param2;
                socket.write(res.toString());
                break;
            case "SAIR":
                socket.end();
                break;
            default:
                socket.write("DESCONHECIDO");
        }
    });

    socket.on("end", function () {
        console.log(" >>>> Cliente desconectado!");
    });
}

function main() {
    console.log("Iniciando servidor...");

    const server = net.createServer(connectionListener);

    server.listen(3000, "0.0.0.0", function() {
        console.log("Servidor rodando!");
    });
}

main();