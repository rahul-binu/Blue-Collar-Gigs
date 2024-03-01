package net.bluecollargigs.bcgbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.bluecollargigs.bcgbackend.entity.Application;

@Repository
public interface ApplicationRepository extends JpaRepository<Application,Long> {
    
}
