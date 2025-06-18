// ============================================================================
// COMPONENTE PRINCIPAL MEJORADO - SOLICITAR COMPRA
// ============================================================================

import React, { useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { ErrorAlert } from "../../components/ui/ErrorAlert";
import { Header } from "../../components/layout/Header";
import { Sidebar } from "../../components/layout/Sidebar";
import { OrderHeader } from "../../components/purchase-order/OrderHeader";
import { OrderDetails } from "../../components/purchase-order/OrderDetails";
import { ActionButtons } from "../../components/purchase-order/ActionButtons";
import { usePurchaseOrder } from "../../hooks/usePurchaseOrder";
import { NAVIGATION_ITEMS, ORDER_DATA, USER_DATA } from "../../data/constants";
import { NavigationItem } from "../../types";

/**
 * Componente principal para la gestión de solicitudes de compra
 * Implementa una arquitectura modular con separación de responsabilidades
 */
export const SolicitarCompra: React.FC = () => {
  // Estados locales
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [navigationItems, setNavigationItems] = useState(NAVIGATION_ITEMS);

  // Hook personalizado para la lógica de órdenes
  const { 
    handleReject, 
    handleConfirm, 
    refreshOrder,
    isProcessing, 
    error, 
    clearError,
    orderStatus 
  } = usePurchaseOrder(ORDER_DATA);

  /**
   * Maneja el clic en elementos de navegación
   */
  const handleNavigationClick = (clickedItem: NavigationItem) => {
    setNavigationItems(items =>
      items.map(item => ({
        ...item,
        isActive: item.id === clickedItem.id
      }))
    );
  };

  /**
   * Maneja las acciones del header
   */
  const handleHeaderActions = {
    onNotificationClick: () => console.log('🔔 Abriendo notificaciones'),
    onSettingsClick: () => console.log('⚙️ Abriendo configuración'),
    onProfileClick: () => console.log('👤 Abriendo perfil'),
    onLogoutClick: () => {
      if (window.confirm('¿Está seguro de que desea cerrar sesión?')) {
        console.log('🚪 Cerrando sesión');
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="flex flex-col h-screen max-w-[1400px] mx-auto bg-white shadow-2xl">
        {/* Header mejorado */}
        <Header 
          user={USER_DATA} 
          {...handleHeaderActions}
        />

        {/* Contenido principal */}
        <div className="flex flex-1 pt-[102px]">
          {/* Sidebar mejorado */}
          <Sidebar 
            navigationItems={navigationItems}
            isCollapsed={isSidebarCollapsed}
            onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            onItemClick={handleNavigationClick}
          />

          {/* Área de contenido principal */}
          <main className="flex-1 p-8 overflow-auto">
            {/* Alerta de error si existe */}
            {error && (
              <ErrorAlert 
                message={error} 
                onClose={clearError}
                className="mb-6"
              />
            )}

            {/* Tarjeta principal de la orden */}
            <Card className="w-full max-w-4xl mx-auto rounded-xl border-0 shadow-xl bg-white">
              <CardContent className="p-8">
                {/* Header de la orden */}
                <OrderHeader orderData={{ ...ORDER_DATA, status: orderStatus }} />
                
                {/* Detalles de la orden */}
                <OrderDetails orderData={{ ...ORDER_DATA, status: orderStatus }} />
              </CardContent>
            </Card>

            {/* Botones de acción */}
            <div className="relative max-w-4xl mx-auto">
              <ActionButtons 
                onReject={handleReject}
                onConfirm={handleConfirm}
                onRefresh={refreshOrder}
                isProcessing={isProcessing}
                orderStatus={orderStatus}
              />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};