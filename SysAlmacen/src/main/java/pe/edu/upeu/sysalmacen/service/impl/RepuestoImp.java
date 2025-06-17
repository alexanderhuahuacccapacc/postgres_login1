package pe.edu.upeu.sysalmacen.service.impl;

import pe.edu.upeu.sysalmacen.model.Repuesto;
import pe.edu.upeu.sysalmacen.repository.ICrudGenericoRepository;
import pe.edu.upeu.sysalmacen.service.IRepuestoService;

public class RepuestoImp extends CrudGenericoServiceImp <Repuesto, Long> implements IRepuestoService {
    @Override
    protected ICrudGenericoRepository<Repuesto, Long> getRepo() {
        return null;
    }
}
