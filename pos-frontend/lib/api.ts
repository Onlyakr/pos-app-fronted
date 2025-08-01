const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

interface ApiError {
  message: string;
  status: number;
}

class ApiService {
  private baseURL: string;

  constructor() {
    this.baseURL = API_BASE_URL;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      credentials: 'include', // Include cookies for authentication
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'An error occurred' }));
        throw new Error(errorData.message || `HTTP ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Network error occurred');
    }
  }

  // Authentication endpoints
  async login(username: string, password: string) {
    return this.request('/user/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });
  }

  async register(username: string, password: string) {
    return this.request('/user/', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });
  }

  async logout() {
    return this.request('/user/logout', {
      method: 'POST',
    });
  }

  // Product endpoints
  async getProducts() {
    return this.request('/product/');
  }

  async createProduct(productData: {
    name: string;
    author: string;
    price: number;
    barcode: string;
    quantity: number;
    category: string;
  }) {
    return this.request('/product/create', {
      method: 'POST',
      body: JSON.stringify(productData),
    });
  }

  // Category endpoints
  async getCategories() {
    return this.request('/category/');
  }

  async createCategory(name: string) {
    return this.request('/category/create', {
      method: 'POST',
      body: JSON.stringify({ name }),
    });
  }

  // Test manager access
  async testManagerAccess() {
    return this.request('/user/manager');
  }

  // Health check
  async healthCheck() {
    return this.request('/');
  }
}

export const apiService = new ApiService();
export default apiService;
