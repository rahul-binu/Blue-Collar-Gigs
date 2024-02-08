package net.bluecollargigs.bcgbackend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
// import jakarta.persistence.JoinColumn;
// import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "worker")
public class Worker {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "worker_id")
    private Long workerId;

    //@OneToOne
    @Column(name = "user_id")
    private Long userId;

    @Column(name = "skills", nullable = false)
    private String skills;

    @Column(name = "experience", nullable = false)
    private String experience;

    @Column(name = "education", nullable = false)
    private String education;

    @Column(name = "certification", nullable = false)
    private String certification;

    // Constructors, getters, and setters
}

// @Table(name = "worker")
// public class Worker {

// @Id
// @GeneratedValue(strategy = GenerationType.IDENTITY)
// private Long wId;

// @Column(name = "user_id", nullable = false)
// private Long userId;

// @Column(name = "skills", nullable = false)
// private String skills;

// @Column(name = "experiance", nullable = false)
// private String experiance;

// @Column(name = "education", nullable = false)
// private String education;

// @Column(name = "certification", nullable = false)
// private String certification;

// }
