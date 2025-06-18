// ============================================================================
// TIPOS Y INTERFACES PRINCIPALES
// ============================================================================

/**
 * Representa un elemento de navegación en el sidebar
 */
export interface NavigationItem {
  id: number;
  label: string;
  icon?: string;
  hasCheckbox?: boolean;
  isActive?: boolean;
  onClick?: () => void;
}

/**
 * Datos completos de una orden de compra
 */
export interface OrderData {
  orderNumber: string;
  issueDate: string;
  supplier: string;
  address: string;
  phone: string;
  email: string;
  subtotal: string;
  igv: string;
  total: string;
  status: OrderStatus;
  items?: OrderItem[];
  notes?: string;
}

/**
 * Item individual dentro de una orden
 */
export interface OrderItem {
  id: string;
  name: string;
  description: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  category: string;
}

/**
 * Estados posibles de una orden
 */
export enum OrderStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  REJECTED = 'rejected',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed'
}

/**
 * Información del usuario actual
 */
export interface User {
  id: string;
  role: string;
  name: string;
  avatar: string;
  email?: string;
  department?: string;
}

/**
 * Configuración de tema y apariencia
 */
export interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  textColor: string;
}

/**
 * Props para componentes de loading
 */
export interface LoadingProps {
  isLoading: boolean;
  message?: string;
}

/**
 * Respuesta estándar de la API
 */
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}