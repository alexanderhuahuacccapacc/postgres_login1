package pe.edu.upeu.sysalmacen.service.impl;

import pe.edu.upeu.sysalmacen.model.DetalleSolicitud;
import pe.edu.upeu.sysalmacen.repository.ICrudGenericoRepository;
import pe.edu.upeu.sysalmacen.service.IDetalleSolicitudService;

public class DetalleSolicitudImp extends CrudGenericoServiceImp <DetalleSolicitud, Long> implements IDetalleSolicitudService {
    @Override
    protected ICrudGenericoRepository<DetalleSolicitud, Long> getRepo() {
        return null;
    }
}
