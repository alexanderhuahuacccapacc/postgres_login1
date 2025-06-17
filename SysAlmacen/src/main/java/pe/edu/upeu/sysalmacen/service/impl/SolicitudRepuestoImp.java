package pe.edu.upeu.sysalmacen.service.impl;


import pe.edu.upeu.sysalmacen.model.SolicitudRepuesto;
import pe.edu.upeu.sysalmacen.repository.ICrudGenericoRepository;
import pe.edu.upeu.sysalmacen.service.ISolicitudRepuestoService;

public class SolicitudRepuestoImp extends CrudGenericoServiceImp <SolicitudRepuesto, Long> implements ISolicitudRepuestoService {
    @Override
    protected ICrudGenericoRepository<SolicitudRepuesto, Long> getRepo() {
        return null;
    }
}
