package pe.edu.upeu.sysalmacen.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "upeu_solicitud_historial")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class HistorialSolicitud {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_historial")
    private Long idHistorial;

    @ManyToOne
    @JoinColumn(name = "id_solicitud", nullable = false,
            foreignKey = @ForeignKey(name = "FK_HISTORIAL_SOLICITUD"))
    private SolicitudRepuesto solicitud;

    @Column(name = "estado_anterior", length = 20)
    private String estadoAnterior;

    @Column(name = "estado_nuevo", nullable = false, length = 20)
    private String estadoNuevo;

    @ManyToOne
    @JoinColumn(name = "id_usuario", nullable = false,
            foreignKey = @ForeignKey(name = "FK_USUARIO"))
    private Usuario usuario;

    @Column(name = "observaciones")
    private String observaciones;

    @Column(name = "fecha_cambio")
    private LocalDateTime fechaCambio;
}