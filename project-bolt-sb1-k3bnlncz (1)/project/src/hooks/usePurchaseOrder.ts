// ============================================================================
// HOOK PERSONALIZADO PARA GESTIÓN DE ÓRDENES DE COMPRA
// ============================================================================

import { useState, useCallback, useEffect } from 'react';
import { OrderData, OrderStatus, ApiResponse } from '../types';
import { MESSAGES } from '../data/constants';

interface UsePurchaseOrderReturn {
  isProcessing: boolean;
  error: string | null;
  orderStatus: OrderStatus;
  handleReject: () => Promise<void>;
  handleConfirm: () => Promise<void>;
  clearError: () => void;
  refreshOrder: () => Promise<void>;
}

/**
 * Hook personalizado para manejar la lógica de órdenes de compra
 */
export const usePurchaseOrder = (initialOrder?: OrderData): UsePurchaseOrderReturn => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [orderStatus, setOrderStatus] = useState<OrderStatus>(
    initialOrder?.status || OrderStatus.PENDING
  );

  /**
   * Simula una llamada a la API
   */
  const simulateApiCall = async (action: string, delay: number = 1500): Promise<ApiResponse> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simular éxito/error aleatorio (90% éxito)
        const success = Math.random() > 0.1;
        
        resolve({
          success,
          message: success 
            ? `Orden ${action} exitosamente` 
            : `Error al ${action} la orden`,
          error: success ? undefined : `Error de servidor al ${action}`
        });
      }, delay);
    });
  };

  /**
   * Maneja el rechazo de la orden
   */
  const handleReject = useCallback(async (): Promise<void> => {
    if (isProcessing) return;

    const confirmed = window.confirm(MESSAGES.confirmation.rejectOrder);
    if (!confirmed) return;

    setIsProcessing(true);
    setError(null);

    try {
      const response = await simulateApiCall('rechazar');
      
      if (response.success) {
        setOrderStatus(OrderStatus.REJECTED);
        
        // Mostrar notificación de éxito
        const notification = document.createElement('div');
        notification.className = 'fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
        notification.textContent = MESSAGES.success.orderRejected;
        document.body.appendChild(notification);
        
        setTimeout(() => {
          document.body.removeChild(notification);
        }, 3000);
        
        console.log('✅ Orden rechazada:', response.message);
      } else {
        throw new Error(response.error || MESSAGES.error.generic);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : MESSAGES.error.generic;
      setError(errorMessage);
      console.error('❌ Error al rechazar orden:', errorMessage);
    } finally {
      setIsProcessing(false);
    }
  }, [isProcessing]);

  /**
   * Maneja la confirmación de la orden
   */
  const handleConfirm = useCallback(async (): Promise<void> => {
    if (isProcessing) return;

    const confirmed = window.confirm(MESSAGES.confirmation.confirmOrder);
    if (!confirmed) return;

    setIsProcessing(true);
    setError(null);

    try {
      const response = await simulateApiCall('confirmar');
      
      if (response.success) {
        setOrderStatus(OrderStatus.CONFIRMED);
        
        // Mostrar notificación de éxito
        const notification = document.createElement('div');
        notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
        notification.textContent = MESSAGES.success.orderConfirmed;
        document.body.appendChild(notification);
        
        setTimeout(() => {
          document.body.removeChild(notification);
        }, 3000);
        
        console.log('✅ Orden confirmada:', response.message);
      } else {
        throw new Error(response.error || MESSAGES.error.generic);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : MESSAGES.error.generic;
      setError(errorMessage);
      console.error('❌ Error al confirmar orden:', errorMessage);
    } finally {
      setIsProcessing(false);
    }
  }, [isProcessing]);

  /**
   * Limpia el error actual
   */
  const clearError = useCallback((): void => {
    setError(null);
  }, []);

  /**
   * Refresca los datos de la orden
   */
  const refreshOrder = useCallback(async (): Promise<void> => {
    setIsProcessing(true);
    setError(null);

    try {
      const response = await simulateApiCall('actualizar', 1000);
      
      if (!response.success) {
        throw new Error(response.error || MESSAGES.error.generic);
      }
      
      console.log('🔄 Orden actualizada');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : MESSAGES.error.generic;
      setError(errorMessage);
      console.error('❌ Error al actualizar orden:', errorMessage);
    } finally {
      setIsProcessing(false);
    }
  }, []);

  // Efecto para logging de cambios de estado
  useEffect(() => {
    console.log(`📊 Estado de orden cambió a: ${orderStatus}`);
  }, [orderStatus]);

  return {
    isProcessing,
    error,
    orderStatus,
    handleReject,
    handleConfirm,
    clearError,
    refreshOrder,
  };
};