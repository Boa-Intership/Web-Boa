import axios from 'axios';
import {
  TrackingCustomerRepository,
  TrackingCustomerEntity,
} from '../../domain/entities/TrackingCustomerEntity';

export class TrackingCustomerService implements TrackingCustomerRepository {
  async getTrackingCustomer(codeTracking: string) {
    try {
      const response = await axios.get<TrackingCustomerEntity>(
        `api/tracking-customer/${codeTracking}`
      );
      return response.data;
    } catch (error) {
      throw new Error('Error fetching tracking customer data');
    }
  }
}
