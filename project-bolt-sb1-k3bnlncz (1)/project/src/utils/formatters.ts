// ============================================================================
// UTILIDADES DE FORMATEO Y VALIDACIÓN
// ============================================================================

/**
 * Formatea un número como moneda
 */
export const formatCurrency = (amount: number | string, currency: string = 'USD'): string => {
  const numericAmount = typeof amount === 'string' ? parseFloat(amount.replace(/[^0-9.-]+/g, '')) : amount;
  
  return new Intl.NumberFormat('es-PE', {
    style: 'currency',
    currency: currency === 'USD' ? 'USD' : 'PEN',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(numericAmount);
};

/**
 * Formatea una fecha
 */
export const formatDate = (date: string | Date, format: 'short' | 'long' = 'short'): string => {
  let dateObj: Date;
  
  if (typeof date === 'string') {
    // Check if the date string is in DD/MM/YYYY format
    const ddmmyyyyPattern = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
    const match = date.match(ddmmyyyyPattern);
    
    if (match) {
      // Parse DD/MM/YYYY format explicitly
      const day = parseInt(match[1], 10);
      const month = parseInt(match[2], 10) - 1; // Month is 0-indexed
      const year = parseInt(match[3], 10);
      dateObj = new Date(year, month, day);
    } else {
      // Try to parse other formats
      dateObj = new Date(date);
    }
  } else {
    dateObj = date;
  }
  
  // Validate the date object
  if (isNaN(dateObj.getTime())) {
    return 'Fecha inválida';
  }
  
  if (format === 'long') {
    return new Intl.DateTimeFormat('es-PE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(dateObj);
  }
  
  return new Intl.DateTimeFormat('es-PE', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(dateObj);
};

/**
 * Formatea un número de teléfono
 */
export const formatPhone = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{2})(\d{3})(\d{3})(\d{3})$/);
  
  if (match) {
    return `+${match[1]} ${match[2]} ${match[3]} ${match[4]}`;
  }
  
  return phone;
};

/**
 * Trunca un texto a una longitud específica
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

/**
 * Valida un email
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Valida un número de teléfono peruano
 */
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^\+51\s?\d{3}\s?\d{3}\s?\d{3}$/;
  return phoneRegex.test(phone);
};

/**
 * Genera un ID único
 */
export const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

/**
 * Capitaliza la primera letra de cada palabra
 */
export const capitalizeWords = (text: string): string => {
  return text.replace(/\w\S*/g, (txt) => 
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
};