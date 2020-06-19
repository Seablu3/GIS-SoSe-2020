// Modul http wird geladen, variable Http zugewiesen
import * as Http from "http";

export namespace A08Server {
    //Konsole sagt Starting server
  console.log("Starting server");
    //port 
  let port: number = Number(process.env.PORT);
    //Überprüfung port , falls nicht vorhanden wird port 8100 zugewiesen
  if (!port)
    port = 8100;
    //initialisierung Server
  let server: Http.Server = Http.createServer();
    //Handler wird hinzugefügt
  server.addListener("request", handleRequest);
  server.addListener("listening", handleListen);
    //Server lauscht dem port
  server.listen(port);

    //Konsole sagt sie hört zu
  function handleListen(): void {
    console.log("Listening");
  }

  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
      //Konsole sagt nein
    console.log("I hear voices!");
      //Parameter Reponse-Header
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");
      //URL wird ausgegeben
    _response.write(_request.url);
      //Reponse wird beendet
    _response.end();
  }
}