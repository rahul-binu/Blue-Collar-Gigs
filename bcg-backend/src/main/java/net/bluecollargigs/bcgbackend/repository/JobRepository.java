package net.bluecollargigs.bcgbackend.repository;

import net.bluecollargigs.bcgbackend.entity.Job;

import org.springframework.stereotype.Repository;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

@Repository
public interface JobRepository extends JpaRepository<Job, Long> {
    // @Query(value = "SELECT * FROM job WHERE job_title = :key OR job_category = :key OR district = :key ", nativeQuery = true)
    // Job findByKey(@Param("key") String key); 
    @Query(value = "SELECT * FROM job WHERE job_title = :key OR job_category = :key OR district = :key ", nativeQuery = true)
    List<Job> findByKey(@Param("key") String key); 
    
}
