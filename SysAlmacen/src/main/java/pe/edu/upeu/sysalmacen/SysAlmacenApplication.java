package pe.edu.upeu.sysalmacen;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan(basePackages = "pe.edu.upeu.sysalmacen.model")
@EnableJpaRepositories(basePackages = "pe.edu.upeu.sysalmacen.repository")
public class SysAlmacenApplication {

	public static void main(String[] args) {
		SpringApplication.run(SysAlmacenApplication.class, args);
	}
}