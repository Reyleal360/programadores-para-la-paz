const http = require("http")

const puerto = 3000

const servidor = http.createServer((request, response) => {
  console.log("Método recibido:", request.method)
  console.log("Ruta solicitada:", request.url)

  if (request.method === "GET" && request.url === "/") {
    response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
    response.write("Bienvenida comunidad de Programadores para la Paz. Este es el servidor de participación.")
    response.end()
    return
  }

  if (request.method === "GET" && request.url === "/propuestas") {
    response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
    response.write("Lista inicial de propuestas: convivencia, información clara, participación y talleres de tecnología.")
    response.end()
    return
  }

  if (request.method === "POST" && request.url === "/propuestas") {
    let cuerpo = ""

    request.on("data", (parte) => {
      cuerpo = cuerpo + parte
    })

    request.on("end", () => {
      response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
      response.write("Propuesta recibida por el servidor: ")
      response.write(cuerpo)
      response.end()
    })

    return
  }

  response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" })
  response.write("Ruta no encontrada. Revisa la dirección solicitada.")
  response.end()
})

servidor.listen(puerto, () => {
  console.log("Servidor funcionando en http://localhost:3000")
  console.log("Puedes abrir http://localhost:3000 en el navegador.")
})
