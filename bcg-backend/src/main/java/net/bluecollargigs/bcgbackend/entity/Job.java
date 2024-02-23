package net.bluecollargigs.bcgbackend.entity;

import java.sql.Date;

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

@Entity
@Table(name = "job")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Job {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "job_id")
    private Long jobId;

    @Column(name = "recruiter_id")
    private Long recruiterId;

    @Column(name = "job_title")
    private String jobTitle;

    @Column(name = "job_category")
    private String jobCategory;

    @Column(name = "job_description")
    private String jobDescription;

    @Column(name = "location")
    private String location;

    @Column(name = "state")
    private String state;

    @Column(name = "district")
    private String district;

    @Column(name = "pincode")
    private Integer pincode;

    @Column(name = "est_time_ft_work")
    private String estimatedTFTWork;

    @Column(name = "payment_p_d")
    private Float paymentPerDay;

    @Column(name = "w_e_s_d")
    private Date workEstimatedStartDate;

    @Column(name = "r_phone")
    private String recruiterPhone;

    @Column(name = "expected_skill")
    private String expectedSkills;

    @Column(name = "r_mail")
    private String recruiterEmail;

    @Column(name = "transportation")
    private String transportation;

}
