package pe.edu.upeu.sysalmacen.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DetalleSolicitudDTO {
    private Long idDetalle;
    private SolicitudRepuestoDTO solicitud;
    private RepuestoDTO repuesto;
    private Integer cantidad;
    private Integer cantidadAprobada;
    private String observaciones;
    private String estado;
    private LocalDateTime fechaCreacion;
    private LocalDateTime fechaActualizacion;
}