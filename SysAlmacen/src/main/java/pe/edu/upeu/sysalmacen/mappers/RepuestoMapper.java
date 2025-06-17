package pe.edu.upeu.sysalmacen.mappers;

import org.mapstruct.Mapper;
//import org.mapstruct.Mapping;
import pe.edu.upeu.sysalmacen.dtos.RepuestoDTO;
import pe.edu.upeu.sysalmacen.model.Repuesto;

@Mapper(componentModel = "spring", uses = {MarcaMapper.class, CategoriaMapper.class})
public interface RepuestoMapper extends GenericMapper<RepuestoDTO, Repuesto> {

    @Override
    //@Mapping(target = "idRepuesto", source = "id")
    RepuestoDTO toDTO(Repuesto entity);

    @Override
    //@Mapping(target = "id", source = "idRepuesto")
    Repuesto toEntity(RepuestoDTO dto);
}
