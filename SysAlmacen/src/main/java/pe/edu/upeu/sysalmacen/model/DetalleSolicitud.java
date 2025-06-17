package pe.edu.upeu.sysalmacen.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "upeu_solicitud_detalle")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DetalleSolicitud {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_detalle")
    private Long idDetalle;

    @ManyToOne
    @JoinColumn(name = "id_solicitud", nullable = false,
            foreignKey = @ForeignKey(name = "FK_DETALLE_SOLICITUD"))
    private SolicitudRepuesto solicitud;

    @ManyToOne
    @JoinColumn(name = "id_repuesto", nullable = false,
            foreignKey = @ForeignKey(name = "FK_REPUESTO"))
    private Repuesto repuesto;

    @Column(name = "cantidad", nullable = false)
    private Integer cantidad;

    @Column(name = "cantidad_aprobada")
    private Integer cantidadAprobada;

    @Column(name = "observaciones")
    private String observaciones;

    @Column(name = "estado", length = 20)
    private String estado;

    @Column(name = "fecha_creacion")
    private LocalDateTime fechaCreacion;

    @Column(name = "fecha_actualizacion")
    private LocalDateTime fechaActualizacion;
}