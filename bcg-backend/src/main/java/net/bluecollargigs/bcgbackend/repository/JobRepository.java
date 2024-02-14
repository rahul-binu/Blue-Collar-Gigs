package net.bluecollargigs.bcgbackend.repository;

import net.bluecollargigs.bcgbackend.entity.Job;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface JobRepository extends JpaRepository<Job, Long> {

}
