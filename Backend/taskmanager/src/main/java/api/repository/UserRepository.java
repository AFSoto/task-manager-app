package api.repository;

import api.model.User;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    // optional es una clase contenedora que puede tener un valor o estar vacio esto
    // evita errores
    Optional<User> findByEmail(String email);

    boolean existsByEmail(String email);

    boolean existsByUsername(String username);

    boolean existsByDocument(String document);
}
