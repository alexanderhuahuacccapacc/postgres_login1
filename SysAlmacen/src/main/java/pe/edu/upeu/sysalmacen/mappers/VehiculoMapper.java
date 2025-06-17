package pe.edu.upeu.sysalmacen.mappers;

import org.mapstruct.Mapper;
//import org.mapstruct.Mapping;
import pe.edu.upeu.sysalmacen.dtos.VehiculoDTO;
import pe.edu.upeu.sysalmacen.model.Vehiculo;

@Mapper(componentModel = "spring")
public interface VehiculoMapper extends GenericMapper<VehiculoDTO, Vehiculo> {

    @Override
    //@Mapping(target = "idVehiculo", source = "id")
    VehiculoDTO toDTO(Vehiculo entity);

    @Override
    //@Mapping(target = "id", source = "idVehiculo")
    Vehiculo toEntity(VehiculoDTO dto);
}