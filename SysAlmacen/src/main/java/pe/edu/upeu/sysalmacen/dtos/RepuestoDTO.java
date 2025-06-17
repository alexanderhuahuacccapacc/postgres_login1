package pe.edu.upeu.sysalmacen.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RepuestoDTO {
    private Long idRepuesto;
    private String codigo;
    private String nombre;
    private String descripcion;
    private MarcaDTO marca;
    private CategoriaDTO categoria;
    private Integer stock;
    private Integer stockMinimo;
    private Double precio;
    private String estado;
    private LocalDateTime fechaCreacion;
    private LocalDateTime fechaActualizacion;
}