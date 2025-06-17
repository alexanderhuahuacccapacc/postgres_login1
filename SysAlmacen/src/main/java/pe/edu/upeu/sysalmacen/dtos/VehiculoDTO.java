package pe.edu.upeu.sysalmacen.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class VehiculoDTO {
    private Long idVehiculo;
    private String placa;
    private String modelo;
    private String marca;
    private Integer anio;
    private String color;
    private String estado;
    private LocalDateTime fechaCreacion;
    private LocalDateTime fechaActualizacion;
}