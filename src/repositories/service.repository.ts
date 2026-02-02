import { serviceModel, Service } from '../models/service.model';

class ServiceRepository {
    public services = serviceModel;

    public async findAll() {
        return await this.services.find();
    }

    public async findById(id: string) {
        return await this.services.findById(id);
    }

    public async create(serviceData: Service) {
        return await this.services.create(serviceData);
    }

    public async update(id: string, serviceData: Service) {
        return await this.services.findByIdAndUpdate(id, serviceData, { new: true });
    }

    public async delete(id: string) {
        return await this.services.findByIdAndDelete(id);
    }
}

export default ServiceRepository;
