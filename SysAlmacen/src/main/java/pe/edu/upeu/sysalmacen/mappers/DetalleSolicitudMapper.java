package pe.edu.upeu.sysalmacen.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import pe.edu.upeu.sysalmacen.dtos.DetalleSolicitudDTO;
import pe.edu.upeu.sysalmacen.model.DetalleSolicitud;

@Mapper(componentModel = "spring", uses = {RepuestoMapper.class, SolicitudRepuestoMapper.class})
public interface DetalleSolicitudMapper extends GenericMapper<DetalleSolicitudDTO, DetalleSolicitud> {

    @Override
    //@Mapping(target = "id_detalle", source = "id")
    //@Mapping(target = "solicitud.usuario.token", ignore = true)
    //@Mapping(target = "solicitud.usuario.clave", ignore = true)
    DetalleSolicitudDTO toDTO(DetalleSolicitud entity);

    @Override
    //@Mapping(target = "id", source = "id_detalle")
    //@Mapping(target = "solicitud.usuario.token", ignore = true)
    //@Mapping(target = "solicitud.usuario.clave", ignore = true)
    DetalleSolicitud toEntity(DetalleSolicitudDTO dto);
}