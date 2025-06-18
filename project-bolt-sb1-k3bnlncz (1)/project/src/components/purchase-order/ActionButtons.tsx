// ============================================================================
// COMPONENTE DE BOTONES DE ACCIÓN MEJORADO
// ============================================================================

import React from 'react';
import { XCircleIcon, CheckCircleIcon, RefreshCwIcon } from 'lucide-react';
import { Button } from "../ui/button";
import { LoadingSpinner } from "../ui/LoadingSpinner";
import { OrderStatus } from '../../types';

interface ActionButtonsProps {
  onReject: () => void;
  onConfirm: () => void;
  onRefresh?: () => void;
  isProcessing?: boolean;
  orderStatus?: OrderStatus;
  disabled?: boolean;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ 
  onReject, 
  onConfirm, 
  onRefresh,
  isProcessing = false,
  orderStatus = OrderStatus.PENDING,
  disabled = false
}) => {
  const isOrderPending = orderStatus === OrderStatus.PENDING;
  const isOrderProcessed = orderStatus === OrderStatus.CONFIRMED || orderStatus === OrderStatus.REJECTED;

  return (
    <div className="absolute bottom-[90px] right-[5px] flex flex-col space-y-3">
      {/* Botón de actualizar */}
      {onRefresh && (
        <div className="flex justify-end">
          <Button
            onClick={onRefresh}
            disabled={isProcessing || disabled}
            className="bg-gray-500 hover:bg-gray-600 text-white rounded-lg h-9 w-32 text-sm transition-all duration-200 flex items-center justify-center"
            title="Actualizar información"
          >
            {isProcessing ? (
              <LoadingSpinner size="sm" color="white" />
            ) : (
              <>
                <RefreshCwIcon className="w-4 h-4 mr-2" />
                Actualizar
              </>
            )}
          </Button>
        </div>
      )}

      {/* Botones principales */}
      <div className="flex space-x-3">
        <Button
          onClick={onReject}
          disabled={isProcessing || disabled || !isOrderPending}
          className={`
            rounded-lg h-10 w-36 text-sm font-medium transition-all duration-200 flex items-center justify-center
            ${isOrderPending 
              ? 'bg-red-500 hover:bg-red-600 hover:shadow-lg transform hover:scale-105 text-white' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }
          `}
          title={isOrderPending ? 'Rechazar orden' : 'Orden ya procesada'}
        >
          {isProcessing ? (
            <LoadingSpinner size="sm" color="white" />
          ) : (
            <>
              <XCircleIcon className="w-4 h-4 mr-2" />
              {orderStatus === OrderStatus.REJECTED ? 'Rechazada' : 'Rechazar'}
            </>
          )}
        </Button>

        <Button
          onClick={onConfirm}
          disabled={isProcessing || disabled || !isOrderPending}
          className={`
            rounded-lg h-10 w-36 text-sm font-medium transition-all duration-200 flex items-center justify-center
            ${isOrderPending 
              ? 'bg-green-500 hover:bg-green-600 hover:shadow-lg transform hover:scale-105 text-white' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }
          `}
          title={isOrderPending ? 'Confirmar orden' : 'Orden ya procesada'}
        >
          {isProcessing ? (
            <LoadingSpinner size="sm" color="white" />
          ) : (
            <>
              <CheckCircleIcon className="w-4 h-4 mr-2" />
              {orderStatus === OrderStatus.CONFIRMED ? 'Confirmada' : 'Confirmar'}
            </>
          )}
        </Button>
      </div>

      {/* Indicador de estado */}
      {isOrderProcessed && (
        <div className="text-center">
          <p className="text-xs text-gray-500 bg-white px-3 py-1 rounded-full shadow-sm">
            {orderStatus === OrderStatus.CONFIRMED ? '✅ Orden confirmada' : '❌ Orden rechazada'}
          </p>
        </div>
      )}
    </div>
  );
};