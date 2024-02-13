package net.bluecollargigs.bcgbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.bluecollargigs.bcgbackend.entity.Profile;

@Repository
public interface ProfileRepository extends JpaRepository<Profile, Long>{

}
