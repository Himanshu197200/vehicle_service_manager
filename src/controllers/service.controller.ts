import { Request, Response, NextFunction } from 'express';
import ServiceService from '../services/service.service';

class ServiceController {

    public serviceService = new ServiceService();

    public getServices = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const filters = req.query;
            const allServices = await this.serviceService.findAllService(filters);

            res.status(200).json({
                data: allServices,
                message: 'findAll'
            });
        } catch (error) {
            next(error);
        }
    };

    public getServiceById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id as string;
            const service = await this.serviceService.findServiceById(id);

            res.status(200).json({
                data: service,
                message: 'findOne'
            });
        } catch (error) {
            next(error);
        }
    };

    public createService = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = req.body;
            const createdService = await this.serviceService.createService(data);

            res.status(201).json({
                data: createdService,
                message: 'created'
            });
        } catch (error) {
            next(error);
        }
    };

    public updateService = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id as string;
            const data = req.body;
            const updatedService = await this.serviceService.updateService(id, data);

            res.status(200).json({
                data: updatedService,
                message: 'updated'
            });
        } catch (error) {
            next(error);
        }
    };

    public deleteService = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id as string;
            const deletedService = await this.serviceService.deleteService(id);

            res.status(200).json({
                data: deletedService,
                message: 'deleted'
            });
        } catch (error) {
            next(error);
        }
    };
}

export default ServiceController;
