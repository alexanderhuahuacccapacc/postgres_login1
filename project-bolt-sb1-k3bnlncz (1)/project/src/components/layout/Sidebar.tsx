// ============================================================================
// COMPONENTE DE SIDEBAR MEJORADO
// ============================================================================

import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { NavigationItem } from '../../types';

interface SidebarProps {
  navigationItems: NavigationItem[];
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
  onItemClick?: (item: NavigationItem) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  navigationItems, 
  isCollapsed = false,
  onToggleCollapse,
  onItemClick 
}) => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const handleItemClick = (item: NavigationItem) => {
    if (onItemClick) {
      onItemClick(item);
    }
    console.log(`📍 Navegando a: ${item.label}`);
  };

  return (
    <aside className={`${isCollapsed ? 'w-20' : 'w-[280px]'} h-full bg-gradient-to-b from-gray-100 to-gray-200 shadow-lg transition-all duration-300 relative`}>
      {/* Botón de colapsar/expandir */}
      <button
        onClick={onToggleCollapse}
        className="absolute -right-3 top-10 bg-white border border-gray-300 rounded-full p-1.5 shadow-md hover:shadow-lg transition-all duration-200 z-10"
        title={isCollapsed ? 'Expandir sidebar' : 'Colapsar sidebar'}
      >
        {isCollapsed ? (
          <ChevronRightIcon className="w-4 h-4 text-gray-600" />
        ) : (
          <ChevronLeftIcon className="w-4 h-4 text-gray-600" />
        )}
      </button>

      {/* Navegación */}
      <nav className="pt-16 px-4">
        {navigationItems.map((item) => (
          <div
            key={item.id}
            className={`
              relative mb-2 rounded-xl transition-all duration-200 cursor-pointer
              ${item.isActive 
                ? 'bg-blue-500 text-white shadow-md' 
                : 'hover:bg-white/50 text-gray-700'
              }
              ${hoveredItem === item.id ? 'transform scale-105' : ''}
            `}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
            onClick={() => handleItemClick(item)}
          >
            <div className="flex items-center p-3">
              {/* Icono */}
              {item.icon ? (
                <div className="flex-shrink-0 w-8 h-8 mr-3">
                  <img
                    className="w-full h-full object-contain"
                    alt={`Icono de ${item.label}`}
                    src={item.icon}
                  />
                </div>
              ) : (
                <div className="flex-shrink-0 w-8 h-8 mr-3 bg-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-600">
                    {item.label.charAt(0)}
                  </span>
                </div>
              )}

              {/* Checkbox si es necesario */}
              {item.hasCheckbox && !isCollapsed && (
                <div className="mr-3">
                  <Checkbox 
                    className="w-4 h-4 border-current" 
                    checked={item.isActive}
                  />
                </div>
              )}

              {/* Texto del elemento */}
              {!isCollapsed && (
                <span className="font-medium text-sm capitalize flex-1">
                  {item.label}
                </span>
              )}

              {/* Indicador de elemento activo */}
              {item.isActive && (
                <div className="absolute right-2 w-2 h-2 bg-white rounded-full"></div>
              )}
            </div>

            {/* Tooltip para sidebar colapsado */}
            {isCollapsed && (
              <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
                {item.label}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Información adicional en la parte inferior */}
      {!isCollapsed && (
        <div className="absolute bottom-4 left-4 right-4 bg-white/30 rounded-lg p-3">
          <p className="text-xs text-gray-600 text-center">
            Sistema de Gestión
          </p>
          <p className="text-xs text-gray-500 text-center mt-1">
            © 2025 Empresa S.A.C.
          </p>
        </div>
      )}
    </aside>
  );
};