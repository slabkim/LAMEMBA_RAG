export const fetchAPI = async (endpoint: string, options: RequestInit = {}) => {
  const url = `http://localhost:3000/api${endpoint}`;
  
  const headers: Record<string, string> = {
    ...(options.headers as Record<string, string> || {}),
  };

  // Hanya set Content-Type ke application/json jika body BUKAN FormData
  if (!(options.body instanceof FormData) && !headers['Content-Type']) {
    headers['Content-Type'] = 'application/json';
  }

  const response = await fetch(url, {
    ...options,
    headers,
    credentials: 'include',
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error?.message || data.message || 'An error occurred');
  }

  return data;
};
