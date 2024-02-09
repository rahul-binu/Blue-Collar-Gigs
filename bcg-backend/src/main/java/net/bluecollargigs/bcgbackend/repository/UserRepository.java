package net.bluecollargigs.bcgbackend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.bluecollargigs.bcgbackend.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
    //Object findByEmail(String email);
    Optional<User> findByEmail(String email);
}
