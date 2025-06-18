// ============================================================================
// COMPONENTE DE HEADER DE ORDEN MEJORADO
// ============================================================================

import React from 'react';
import { CalendarIcon, BuildingIcon, PhoneIcon, MailIcon, FileTextIcon } from 'lucide-react';
import { OrderData, OrderStatus } from '../../types';
import { formatDate, formatPhone } from '../../utils/formatters';

interface OrderHeaderProps {
  orderData: OrderData;
}

const getStatusBadge = (status: OrderStatus) => {
  const statusConfig = {
    [OrderStatus.PENDING]: {
      label: 'Pendiente',
      className: 'bg-yellow-100 text-yellow-800 border-yellow-200'
    },
    [OrderStatus.CONFIRMED]: {
      label: 'Confirmada',
      className: 'bg-green-100 text-green-800 border-green-200'
    },
    [OrderStatus.REJECTED]: {
      label: 'Rechazada',
      className: 'bg-red-100 text-red-800 border-red-200'
    },
    [OrderStatus.IN_PROGRESS]: {
      label: 'En Proceso',
      className: 'bg-blue-100 text-blue-800 border-blue-200'
    },
    [OrderStatus.COMPLETED]: {
      label: 'Completada',
      className: 'bg-gray-100 text-gray-800 border-gray-200'
    }
  };

  const config = statusConfig[status];
  
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${config.className}`}>
      {config.label}
    </span>
  );
};

export const OrderHeader: React.FC<OrderHeaderProps> = ({ orderData }) => {
  return (
    <div className="space-y-6">
      {/* Título y estado */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            ORDEN DE COMPRA
          </h1>
          <div className="flex items-center space-x-3">
            <span className="text-lg font-semibold text-blue-600">
              {orderData.orderNumber}
            </span>
            {getStatusBadge(orderData.status)}
          </div>
        </div>
        
        <div className="text-right">
          <p className="text-sm text-gray-500">Fecha de emisión</p>
          <p className="text-lg font-semibold text-gray-900">
            {formatDate(orderData.issueDate)}
          </p>
        </div>
      </div>

      {/* Información del proveedor */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <BuildingIcon className="w-5 h-5 mr-2 text-blue-500" />
          Información del Proveedor
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium text-gray-500">Empresa</p>
              <p className="text-base text-gray-900 font-medium">{orderData.supplier}</p>
            </div>
            
            <div>
              <p className="text-sm font-medium text-gray-500 flex items-center">
                <CalendarIcon className="w-4 h-4 mr-1" />
                Dirección
              </p>
              <p className="text-base text-gray-700">{orderData.address}</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium text-gray-500 flex items-center">
                <PhoneIcon className="w-4 h-4 mr-1" />
                Teléfono
              </p>
              <p className="text-base text-gray-700">{formatPhone(orderData.phone)}</p>
            </div>
            
            <div>
              <p className="text-sm font-medium text-gray-500 flex items-center">
                <MailIcon className="w-4 h-4 mr-1" />
                Correo Electrónico
              </p>
              <a 
                href={`mailto:${orderData.email}`}
                className="text-base text-blue-600 hover:text-blue-800 transition-colors"
              >
                {orderData.email}
              </a>
            </div>
          </div>
        </div>

        {/* Notas adicionales */}
        {orderData.notes && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm font-medium text-gray-500 flex items-center mb-2">
              <FileTextIcon className="w-4 h-4 mr-1" />
              Notas Adicionales
            </p>
            <p className="text-sm text-gray-700 bg-white p-3 rounded border">
              {orderData.notes}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};