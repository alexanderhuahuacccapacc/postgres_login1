package pe.edu.upeu.sysalmacen.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "upeu_solicitud_repuesto")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SolicitudRepuesto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_solicitud")
    private Long idSolicitud;

    @Column(name = "codigo_solicitud", nullable = false, unique = true, length = 20)
    private String codigoSolicitud;

    @Column(name = "fecha_solicitud", nullable = false)
    private LocalDateTime fechaSolicitud;

    @Column(name = "estado", nullable = false, length = 20)
    private String estado;

    @Column(name = "descripcion")
    private String descripcion;

    @Column(name = "prioridad", nullable = false, length = 15)
    private String prioridad;

    @ManyToOne
    @JoinColumn(name = "id_usuario", nullable = false,
            foreignKey = @ForeignKey(name = "FK_USUARIO"))
    private Usuario usuario;

    @ManyToOne
    @JoinColumn(name = "id_vehiculo",
            foreignKey = @ForeignKey(name = "FK_VEHICULO"))
    private Vehiculo vehiculo;

    @Column(name = "fecha_requerida")
    private LocalDateTime fechaRequerida;

    @Column(name = "observaciones")
    private String observaciones;

    @Column(name = "fecha_creacion")
    private LocalDateTime fechaCreacion;

    @Column(name = "fecha_actualizacion")
    private LocalDateTime fechaActualizacion;

    @OneToMany(mappedBy = "solicitud", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<DetalleSolicitud> detalles;

    @OneToMany(mappedBy = "solicitud", cascade = CascadeType.ALL)
    private List<HistorialSolicitud> historial;
}