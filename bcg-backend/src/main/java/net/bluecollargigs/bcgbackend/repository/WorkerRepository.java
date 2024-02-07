package net.bluecollargigs.bcgbackend.repository;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import net.bluecollargigs.bcgbackend.entity.Worker;

@Repository
public interface WorkerRepository extends JpaRepository<Worker, Long> {

}