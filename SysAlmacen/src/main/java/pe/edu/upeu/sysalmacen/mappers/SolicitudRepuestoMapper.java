package pe.edu.upeu.sysalmacen.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import pe.edu.upeu.sysalmacen.dtos.SolicitudRepuestoDTO;
import pe.edu.upeu.sysalmacen.model.SolicitudRepuesto;

@Mapper(componentModel = "spring",
        uses = {UsuarioMapper.class, VehiculoMapper.class, DetalleSolicitudMapper.class})
public interface SolicitudRepuestoMapper extends GenericMapper<SolicitudRepuestoDTO, SolicitudRepuesto> {

    @Override
    //@Mapping(target = "idSolicitud", source = "id")
    @Mapping(target = "detalles", source = "detalles")
    //@Mapping(target = "usuario.token", ignore = true)
    //@Mapping(target = "usuario.clave", ignore = true)
    SolicitudRepuestoDTO toDTO(SolicitudRepuesto entity);

    @Override
    //@Mapping(target = "id", source = "idSolicitud")
    @Mapping(target = "detalles", source = "detalles")
    //@Mapping(target = "usuario.token", ignore = true)
    //@Mapping(target = "usuario.clave", ignore = true)
    SolicitudRepuesto toEntity(SolicitudRepuestoDTO dto);
}