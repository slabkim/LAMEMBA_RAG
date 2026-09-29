export const fetchAPI = async (endpoint: string, options: RequestInit = {}) => {
  const url = `http://localhost:3000/api${endpoint}`;
  
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    credentials: 'include', // Send cookies cross-origin
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error?.message || data.message || 'An error occurred');
  }

  return data;
};
