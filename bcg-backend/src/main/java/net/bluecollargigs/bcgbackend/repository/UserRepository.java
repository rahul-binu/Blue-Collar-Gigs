package net.bluecollargigs.bcgbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.bluecollargigs.bcgbackend.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
    
}
