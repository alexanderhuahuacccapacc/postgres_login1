package pe.edu.upeu.sysalmacen.service.impl;

import pe.edu.upeu.sysalmacen.model.HistorialSolicitud;
import pe.edu.upeu.sysalmacen.repository.ICrudGenericoRepository;
import pe.edu.upeu.sysalmacen.service.IHistorialSolicitudService;

public class HistorialSolicitudImp extends CrudGenericoServiceImp <HistorialSolicitud,Long> implements IHistorialSolicitudService {
    @Override
    protected ICrudGenericoRepository<HistorialSolicitud, Long> getRepo() {
        return null;
    }
}
