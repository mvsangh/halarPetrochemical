import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export interface ContactData {
    fullName: string;
    email: string;
    phone?: string;
    company?: string;
    message: string;
}

export const createContact = async (data: ContactData) => {
    try {
        const response = await api.post('/contact', data);
        return response.data;
    } catch (error: any) {
        throw error.response?.data || error.message;
    }
};

export default api;
