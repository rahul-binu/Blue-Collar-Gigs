package net.bluecollargigs.bcgbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.bluecollargigs.bcgbackend.entity.JobCategory;

@Repository
public interface JobCategoryRepository extends JpaRepository<JobCategory, Long>{

    
} 