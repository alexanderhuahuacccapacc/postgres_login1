// ============================================================================
// DATOS CONSTANTES Y CONFIGURACIÓN
// ============================================================================

import { NavigationItem, OrderData, User, OrderStatus, OrderItem } from '../types';

/**
 * Elementos de navegación del sidebar
 */
export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    id: 1,
    label: "Panel de Control",
    icon: "/simple-house-icon-on-white-background-free-vector-2.png",
    isActive: false,
  },
  {
    id: 2,
    label: "Órdenes de Compra",
    isActive: false,
  },
  {
    id: 3,
    label: "Entradas",
    isActive: false,
  },
  {
    id: 4,
    label: "Salidas",
    isActive: false,
  },
  {
    id: 5,
    label: "Solicitudes",
    hasCheckbox: true,
    isActive: true,
  },
  {
    id: 6,
    label: "Reportes",
    isActive: false,
  },
];

/**
 * Items de ejemplo para la orden
 */
export const ORDER_ITEMS: OrderItem[] = [
  {
    id: "1",
    name: "Filtro de Aceite",
    description: "Filtro de aceite para motor 2.0L",
    quantity: 5,
    unitPrice: 25.00,
    totalPrice: 125.00,
    category: "Filtros"
  },
  {
    id: "2",
    name: "Pastillas de Freno",
    description: "Pastillas de freno delanteras",
    quantity: 2,
    unitPrice: 85.00,
    totalPrice: 170.00,
    category: "Sistema de Frenos"
  },
  {
    id: "3",
    name: "Aceite Motor 5W-30",
    description: "Aceite sintético para motor",
    quantity: 10,
    unitPrice: 15.50,
    totalPrice: 155.00,
    category: "Lubricantes"
  }
];

/**
 * Datos de la orden de compra
 */
export const ORDER_DATA: OrderData = {
  orderNumber: "OC-2025-0012",
  issueDate: "28/04/2025",
  supplier: "Repuestos Automotrices S.A.",
  address: "Av. Principal 123, Ciudad Industrial, Lima",
  phone: "+51 987 654 321",
  email: "ventas@repuestosauto.com",
  subtotal: "$1,080.00",
  igv: "$194.40",
  total: "$1,274.40",
  status: OrderStatus.PENDING,
  items: ORDER_ITEMS,
  notes: "Entrega programada para el 30/04/2025. Verificar disponibilidad de stock antes de confirmar."
};

/**
 * Información del usuario actual
 */
export const USER_DATA: User = {
  id: "user_001",
  role: "ALMACÉN USER",
  name: "María González",
  avatar: "/6593795-2.png",
  email: "maria.gonzalez@empresa.com",
  department: "Almacén y Logística"
};

/**
 * Configuración de la aplicación
 */
export const APP_CONFIG = {
  name: "Sistema de Gestión de Almacén",
  version: "2.1.0",
  company: "Empresa S.A.C.",
  supportEmail: "soporte@empresa.com",
  maxFileSize: 5 * 1024 * 1024, // 5MB
  allowedFileTypes: ['.pdf', '.jpg', '.png', '.xlsx'],
} as const;

/**
 * Mensajes de la aplicación
 */
export const MESSAGES = {
  loading: "Cargando...",
  error: {
    generic: "Ha ocurrido un error inesperado",
    network: "Error de conexión. Verifique su conexión a internet",
    unauthorized: "No tiene permisos para realizar esta acción",
    notFound: "El recurso solicitado no fue encontrado"
  },
  success: {
    orderConfirmed: "Orden confirmada exitosamente",
    orderRejected: "Orden rechazada correctamente",
    dataSaved: "Datos guardados correctamente"
  },
  confirmation: {
    confirmOrder: "¿Está seguro de confirmar esta orden?",
    rejectOrder: "¿Está seguro de rechazar esta orden?",
    unsavedChanges: "Tiene cambios sin guardar. ¿Desea continuar?"
  }
} as const;