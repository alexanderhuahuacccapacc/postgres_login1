// ============================================================================
// COMPONENTE DE HEADER MEJORADO
// ============================================================================

import React from 'react';
import { BellIcon, SettingsIcon, LogOutIcon, UserIcon } from 'lucide-react';
import { User } from '../../types';
import { APP_CONFIG } from '../../data/constants';

interface HeaderProps {
  user: User;
  onNotificationClick?: () => void;
  onSettingsClick?: () => void;
  onProfileClick?: () => void;
  onLogoutClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  user, 
  onNotificationClick,
  onSettingsClick,
  onProfileClick,
  onLogoutClick 
}) => {
  return (
    <header className="absolute w-full h-[102px] top-0 left-0 bg-gradient-to-r from-[#6989ff] to-[#5a7cfa] shadow-lg">
      <div className="flex items-center justify-between h-full px-6">
        {/* Logo y nombre de la aplicación */}
        <div className="flex items-center space-x-4">
          <div className="text-white">
            <h1 className="text-xl font-bold">{APP_CONFIG.name}</h1>
            <p className="text-sm text-blue-100">v{APP_CONFIG.version}</p>
          </div>
        </div>

        {/* Acciones del header */}
        <div className="flex items-center space-x-4">
          {/* Notificaciones */}
          <button
            onClick={onNotificationClick}
            className="relative p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            title="Notificaciones"
          >
            <BellIcon className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </button>

          {/* Configuración */}
          <button
            onClick={onSettingsClick}
            className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            title="Configuración"
          >
            <SettingsIcon className="w-5 h-5" />
          </button>

          {/* Información del usuario */}
          <div className="flex items-center space-x-3 bg-white/10 rounded-lg px-4 py-2">
            <div className="text-right">
              <p className="text-white font-medium text-sm">{user.role}</p>
              <p className="text-blue-100 text-xs">{user.name}</p>
              {user.department && (
                <p className="text-blue-200 text-xs">{user.department}</p>
              )}
            </div>
            
            <div className="relative group">
              <img
                className="w-10 h-10 rounded-full border-2 border-white/20 object-cover cursor-pointer hover:border-white/40 transition-colors"
                alt={`Avatar de ${user.name}`}
                src={user.avatar}
                onClick={onProfileClick}
              />
              
              {/* Menú desplegable del usuario */}
              <div className="absolute right-0 top-12 bg-white rounded-lg shadow-xl py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <button
                  onClick={onProfileClick}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <UserIcon className="w-4 h-4 mr-3" />
                  Ver Perfil
                </button>
                <button
                  onClick={onSettingsClick}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <SettingsIcon className="w-4 h-4 mr-3" />
                  Configuración
                </button>
                <hr className="my-1" />
                <button
                  onClick={onLogoutClick}
                  className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                >
                  <LogOutIcon className="w-4 h-4 mr-3" />
                  Cerrar Sesión
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};