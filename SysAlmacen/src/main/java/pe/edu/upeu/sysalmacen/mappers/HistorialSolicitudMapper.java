package pe.edu.upeu.sysalmacen.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import pe.edu.upeu.sysalmacen.dtos.HistorialSolicitudDTO;
import pe.edu.upeu.sysalmacen.model.HistorialSolicitud;

@Mapper(componentModel = "spring", uses = {SolicitudRepuestoMapper.class, UsuarioMapper.class})
public interface HistorialSolicitudMapper extends GenericMapper<HistorialSolicitudDTO, HistorialSolicitud> {

    @Override
    //@Mapping(target = "idHistorial", source = "id")
    //@Mapping(target = "solicitud.usuario.token", ignore = true)
    //@Mapping(target = "solicitud.usuario.clave", ignore = true)
    //@Mapping(target = "usuario.token", ignore = true)
    //@Mapping(target = "usuario.clave", ignore = true)
    HistorialSolicitudDTO toDTO(HistorialSolicitud entity);

    @Override
    //@Mapping(target = "id", source = "idHistorial")
    //@Mapping(target = "solicitud.usuario.token", ignore = true)
    //@Mapping(target = "solicitud.usuario.clave", ignore = true)
    //@Mapping(target = "usuario.token", ignore = true)
    //@Mapping(target = "usuario.clave", ignore = true)
    HistorialSolicitud toEntity(HistorialSolicitudDTO dto);
}
