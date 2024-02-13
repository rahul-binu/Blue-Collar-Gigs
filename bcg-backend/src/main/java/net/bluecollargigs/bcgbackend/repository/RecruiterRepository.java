package net.bluecollargigs.bcgbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.bluecollargigs.bcgbackend.entity.Recruiter;

@Repository
public interface RecruiterRepository extends JpaRepository<Recruiter, Long>{

    
} 