// ============================================================================
// COMPONENTE DE DETALLES DE ORDEN MEJORADO
// ============================================================================

import React from 'react';
import { PackageIcon, DollarSignIcon, InfoIcon } from 'lucide-react';
import { OrderData } from '../../types';
import { formatCurrency } from '../../utils/formatters';

interface OrderDetailsProps {
  orderData: OrderData;
}

export const OrderDetails: React.FC<OrderDetailsProps> = ({ orderData }) => {
  return (
    <div className="mt-8 space-y-6">
      <h2 className="text-xl font-semibold text-gray-900 flex items-center">
        <PackageIcon className="w-5 h-5 mr-2 text-blue-500" />
        Detalles de la Orden
      </h2>

      {/* Lista de items si están disponibles */}
      {orderData.items && orderData.items.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
            <h3 className="text-sm font-semibold text-gray-900">Items de la Orden</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Producto
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Categoría
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Cantidad
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Precio Unit.
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {orderData.items.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{item.name}</div>
                        <div className="text-sm text-gray-500">{item.description}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {item.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-900 font-medium">
                      {item.quantity}
                    </td>
                    <td className="px-6 py-4 text-right text-sm text-gray-900">
                      {formatCurrency(item.unitPrice)}
                    </td>
                    <td className="px-6 py-4 text-right text-sm font-medium text-gray-900">
                      {formatCurrency(item.totalPrice)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Imagen decorativa */}
      <div className="relative h-48 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg overflow-hidden">
        <img
          className="absolute right-0 top-0 h-full w-auto object-contain opacity-60"
          alt="Cinta de precaución"
          src="/cinta-peligro-precaucion-medellin-envigado-1.png"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-50 via-transparent to-transparent"></div>
        <div className="relative z-10 p-6 flex items-center">
          <InfoIcon className="w-8 h-8 text-yellow-600 mr-3" />
          <div>
            <h3 className="text-lg font-semibold text-yellow-800">Información Importante</h3>
            <p className="text-sm text-yellow-700 mt-1">
              Verifique todos los detalles antes de confirmar la orden
            </p>
          </div>
        </div>
      </div>

      {/* Resumen financiero */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
          <DollarSignIcon className="w-5 h-5 mr-2 text-blue-500" />
          Resumen Financiero
        </h3>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-600">Subtotal:</span>
            <span className="font-medium text-gray-900 text-lg">{orderData.subtotal}</span>
          </div>
          
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-600">IGV (18%):</span>
            <span className="font-medium text-gray-900 text-lg">{orderData.igv}</span>
          </div>
          
          <div className="border-t border-blue-200 pt-3">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-900">Total a Pagar:</span>
              <span className="text-2xl font-bold text-blue-600">{orderData.total}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de operaciones */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="font-medium text-gray-900 mb-2">Estado de Operaciones</h4>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <span className="text-sm text-gray-600">Esperando confirmación</span>
        </div>
      </div>
    </div>
  );
};