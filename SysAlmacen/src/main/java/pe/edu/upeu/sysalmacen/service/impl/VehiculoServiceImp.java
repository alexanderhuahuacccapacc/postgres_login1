package pe.edu.upeu.sysalmacen.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pe.edu.upeu.sysalmacen.model.Vehiculo;
import pe.edu.upeu.sysalmacen.repository.ICrudGenericoRepository;
import pe.edu.upeu.sysalmacen.repository.IVehiculoRepository;
import pe.edu.upeu.sysalmacen.service.IVehiculoService;

@Service
@RequiredArgsConstructor
@Transactional
public class VehiculoServiceImp extends CrudGenericoServiceImp<Vehiculo, Long> implements IVehiculoService {

    private final IVehiculoRepository vehiculoRepository;

    @Override
    protected ICrudGenericoRepository<Vehiculo, Long> getRepo() {
        return vehiculoRepository;
    }
}



