package net.bluecollargigs.bcgbackend.repository;

//import java.util.Optional;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import net.bluecollargigs.bcgbackend.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // Object findByEmail(String email);
    // Optional<User> findByEmail(String email);
    public User findByEmail(String email);

    //@Query("select u from User u where u.firstname LIKE %:query% OR u.lastname LIKE %:query% OR u.email LIKE %:query%")
    @Query("select u from User u where u.email LIKE %:query%")
    public List<User> searchUser(@Param("query") String query);

}
