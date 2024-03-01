package net.bluecollargigs.bcgbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import net.bluecollargigs.bcgbackend.entity.Application;

@Repository
public interface ApplicationRepository extends JpaRepository<Application, Long> {
    @Query(value = "SELECT * FROM application WHERE job_id = :jid AND applicant_id = :uid", nativeQuery = true)
    Application findByJobIdAndUserId(@Param("jid") Long jid, @Param("uid") Long uid);

    List<Application> findByJobId(Long id);
}
