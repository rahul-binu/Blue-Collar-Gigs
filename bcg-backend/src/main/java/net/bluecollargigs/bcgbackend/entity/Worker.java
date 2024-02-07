package net.bluecollargigs.bcgbackend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "worker")
public class Worker {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "w_id")
    private Long wId;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "userId")
    private User user;

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

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long wId;

//     @Column(name = "user_id", nullable = false)
//     private Long userId;

//     @Column(name = "skills", nullable = false)
//     private String skills;

//     @Column(name = "experiance", nullable = false)
//     private String experiance;

//     @Column(name = "education", nullable = false)
//     private String education;

//     @Column(name = "certification", nullable = false)
//     private String certification;

// }
