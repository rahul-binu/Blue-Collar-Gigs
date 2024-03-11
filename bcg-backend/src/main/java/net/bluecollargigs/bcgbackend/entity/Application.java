package net.bluecollargigs.bcgbackend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "application")
public class Application {

    @Id
    @Column(name = "app_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long applicationId;

    @Column(name = "job_id")
    private Long jobId;

    @Column(name = "applicant_id")
    private Long applicantId;

    @Column(name = "w_e_w_p_d")
    private String ewpd;

    @Column(name = "why_we_hire")
    private String whyWeHire;

}