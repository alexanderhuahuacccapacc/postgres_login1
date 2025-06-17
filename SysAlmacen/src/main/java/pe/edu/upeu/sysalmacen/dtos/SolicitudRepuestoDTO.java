package pe.edu.upeu.sysalmacen.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SolicitudRepuestoDTO {
    private Long idSolicitud;
    private String codigoSolicitud;
    private LocalDateTime fechaSolicitud;
    private String estado;
    private String descripcion;
    private String prioridad;
    private UsuarioDTO usuario;
    private VehiculoDTO vehiculo;
    private LocalDateTime fechaRequerida;
    private String observaciones;
    private LocalDateTime fechaCreacion;
    private LocalDateTime fechaActualizacion;
    private List<DetalleSolicitudDTO> detalles;
}