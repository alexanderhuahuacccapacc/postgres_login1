package pe.edu.upeu.sysalmacen.model;

import jakarta.persistence.Embeddable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode
@Embeddable
public class UsuarioRolPK {
    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;
    @ManyToOne
    @JoinColumn(name = "rol_id")
    private Rol rol;
    public UsuarioRolPK(Usuario usuario, Rol rol) {
        this.usuario = usuario;
        this.rol = rol;
    }


}