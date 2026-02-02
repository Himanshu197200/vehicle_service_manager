import express from "express";
import { Routes } from "./utils/routes.interface";
import { connect } from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';
import errorMiddleware from './middlewares/error.middleware';

dotenv.config()
class App {
    public app: express.Application
    public port: string | number

    constructor(routes: Routes[]) {
        this.app = express()
        this.port = process.env.PORT || 3000
        this.initializeMiddlewares()
        this.initializeRoutes(routes)
        this.initializeErrorHandling()
        this.connectDatabase()
    }
    public startServer() {
        this.app.listen(this.port, () => {
            console.log(`Server listening on http://localhost:${this.port}`);
        });
    }

    private initializeRoutes(routes: Routes[]) {
        routes.forEach((route) => {
            this.app.use("/", route.router);
        });
    }

    private initializeMiddlewares() {
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
    }

    private initializeErrorHandling() {
        this.app.use(errorMiddleware);
    }

    private async connectDatabase() {
        const url = process.env.MONGODB_URL
        if (!url) {
            console.warn("MONGODB_URL is missing in environment variables.")
            return
        }
        try {
            await connect(url)
            console.log("Database connected successfully")
        } catch (err) {
            console.error("Database connection error:", err)
            process.exit(1)
        }
    }
}
export default App
