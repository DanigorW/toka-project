import express from "express";
import router from "./router.js";
import expressWs from "express-ws";
import cors from "cors";

class Server {
    constructor() {
        const app = express();
        const wss = expressWs(app).getWss();

        // CORS configuration
        const corsOptions = {
            origin: 'http://localhost:8080', // Frontend URL
            methods: '*', // Allow all HTTP methods
            credentials: true, // Allow credentials (cookies, authorization headers, etc.)
        };

        app.use(cors(corsOptions)); // Apply CORS options
        app.use(express.json());
        app.use(router);

        // WebSocket setup
        app.ws("/ws", (ws) => {
            console.log("ws client connected");
            ws.onclose = () => console.log("ws client disconnected");
        });

        this.app = app;
        this.wss = wss;

    }

    broadcast(msg) {
        this.wss.clients.forEach((client) => {
            client.send(JSON.stringify(msg));
        });
    }

    start() {
        return new Promise((resolve) => {
            this.server = this.app.listen(3000, () => {
                resolve(this.server);
                console.log("server started", `http://localhost:3000`);
            });
        });
    }
}

export const server = new Server();