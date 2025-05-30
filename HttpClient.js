// Simple HTTP Client 
// Supports GET and POST requests, JSON parsing, and Authorization headers

export class HttpClient {
  constructor(baseURL = '') {
    this.baseURL = baseURL;
  }

  // Helper method to build headers
  _buildHeaders(authToken) {
    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    if (authToken) {
      headers.append('Authorization', `Bearer ${authToken}`);
    }

    return headers;
  }

  // Perform a GET request
  async get(endpoint, authToken = null) {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: 'GET',
      headers: this._buildHeaders(authToken),
    });

    return this._handleResponse(response);
  }

  // Perform a POST request with JSON body
  async post(endpoint, data = {}, authToken = null) {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: 'POST',
      headers: this._buildHeaders(authToken),
      body: JSON.stringify(data),
    });

    return this._handleResponse(response);
  }

  // Handle and parse JSON response
  async _handleResponse(response) {
    const contentType = response.headers.get('Content-Type');

    if (!response.ok) {
      const errorBody = contentType?.includes('application/json')
        ? await response.json()
        : await response.text();
      throw new Error(`HTTP Error ${response.status}: ${JSON.stringify(errorBody)}`);
    }

    if (contentType?.includes('application/json')) {
      return await response.json();
    }

    return await response.text();
  }
}

// Example usage:
// const client = new HttpClient('https://api.example.com');
// client.get('/data', 'your_auth_token_here').then(console.log).catch(console.error);
// client.post('/submit', { key: 'value' }, 'your_auth_token_here').then(console.log).catch(console.error);
