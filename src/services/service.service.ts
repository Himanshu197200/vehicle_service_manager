import ServiceRepository from '../repositories/service.repository';
import { Service } from '../models/service.model';
import ApiFeatures from '../utils/apiFeatures';

class ServiceService {
    public serviceRepo = new ServiceRepository();

    public async findAllService(query: any) {
        const features = new ApiFeatures(this.serviceRepo.services.find(), query)
            .search()
            .paginate();
        const services = await features.query;
        return services;
    }

    public async findServiceById(id: string) {
        const service = await this.serviceRepo.findById(id);
        if (!service) {
            throw new Error('Service not found');
        }
        return service;
    }

    public async createService(data: Service) {
        const newService = await this.serviceRepo.create(data);
        return newService;
    }

    public async updateService(id: string, data: Service) {
        const updatedService = await this.serviceRepo.update(id, data);
        if (!updatedService) {
            throw new Error('Service not found');
        }
        return updatedService;
    }

    public async deleteService(id: string) {
        const deletedService = await this.serviceRepo.delete(id);
        if (!deletedService) {
            throw new Error('Service not found');
        }
        return deletedService;
    }
}

export default ServiceService;
