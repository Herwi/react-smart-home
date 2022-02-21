import apiClient from '../helpers/apiClient';

class DevicesService {
    getAllDevices = () => apiClient().get('devices')
    getDeviceDetails = (id: string) => apiClient().get(`device/${id}`)
}

export default new DevicesService();