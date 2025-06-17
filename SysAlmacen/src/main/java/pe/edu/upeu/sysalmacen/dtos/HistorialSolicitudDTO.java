package pe.edu.upeu.sysalmacen.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class HistorialSolicitudDTO {
    private Long idHistorial;
    private SolicitudRepuestoDTO solicitud;
    private String estadoAnterior;
    private String estadoNuevo;
    private UsuarioDTO usuario;
    private String observaciones;
    private LocalDateTime fechaCambio;
}