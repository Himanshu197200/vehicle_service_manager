import { Router } from 'express';
import ServiceController from '../controllers/service.controller';
import { Routes } from '../utils/routes.interface';
import authMiddleware from '../middlewares/auth.middleware';

class ServiceRoute implements Routes {
    public path = '/services';
    public router = Router();
    public serviceController = new ServiceController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, authMiddleware, this.serviceController.getServices);
        this.router.get(`${this.path}/:id`, authMiddleware, this.serviceController.getServiceById);
        this.router.post(`${this.path}`, authMiddleware, this.serviceController.createService);
        this.router.put(`${this.path}/:id`, authMiddleware, this.serviceController.updateService);
        this.router.delete(`${this.path}/:id`, authMiddleware, this.serviceController.deleteService);
    }
}

export default ServiceRoute;
