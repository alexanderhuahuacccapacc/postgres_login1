// ============================================================================
// COMPONENTE DE ALERTA DE ERROR
// ============================================================================

import React from 'react';
import { AlertTriangleIcon, XIcon } from 'lucide-react';

interface ErrorAlertProps {
  message: string;
  onClose?: () => void;
  className?: string;
}

export const ErrorAlert: React.FC<ErrorAlertProps> = ({ 
  message, 
  onClose, 
  className = '' 
}) => {
  return (
    <div className={`bg-red-50 border border-red-200 rounded-lg p-4 ${className}`}>
      <div className="flex items-start">
        <AlertTriangleIcon className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
        <div className="flex-1">
          <p className="text-sm text-red-800">{message}</p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="ml-3 flex-shrink-0 text-red-400 hover:text-red-600 transition-colors"
          >
            <XIcon className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};