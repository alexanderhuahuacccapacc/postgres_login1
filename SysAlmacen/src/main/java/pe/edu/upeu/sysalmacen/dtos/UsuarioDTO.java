package pe.edu.upeu.sysalmacen.dtos;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class UsuarioDTO {
    private Long idUsuario;
    @NotNull
    private String username;
    //@NotNull
    //private String clave;
    @NotNull
    private String estado;
    private String token;
    private String nombres;
    private String apellidos;
    private String email;
    private String clave;

    public record CredencialesDto(String username, char[] clave) { }

    public record UsuarioCrearDto(String username, char[] clave, String rol, String estado) { }
}