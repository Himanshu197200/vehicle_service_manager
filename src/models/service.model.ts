import { Schema, model, Document } from 'mongoose';

export interface Service extends Document {
    vehicleNumber: string;
    ownerName: string;
    phone: string;
    brand: string;
    vehicleModel: string;
    serviceType: string;
    description: string;
    status: 'pending' | 'in-progress' | 'completed';
    cost: number;
    serviceDate: Date;
}

const serviceSchema = new Schema<Service>({
    vehicleNumber: {
        type: String,
        required: true,
    },
    ownerName: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    vehicleModel: {
        type: String,
        required: true,
    },
    serviceType: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'in-progress', 'completed'],
        default: 'pending',
    },
    cost: {
        type: Number,
        required: true,
    },
    serviceDate: {
        type: Date,
        default: Date.now,
    },
});

export const serviceModel = model<Service>('Service', serviceSchema);
