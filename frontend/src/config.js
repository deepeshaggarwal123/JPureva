const HOSTNAME = window.location.hostname;
const LOCAL_HOSTNAMES = ['localhost', '127.0.0.1', '0.0.0.0', ''];

const defaultApiBase = LOCAL_HOSTNAMES.includes(HOSTNAME)
  ? 'http://localhost:5000/api'
  : 'https://jpureva-f5j6.onrender.com/api';

export const API_BASE = import.meta.env.VITE_API_BASE_URL || defaultApiBase;
