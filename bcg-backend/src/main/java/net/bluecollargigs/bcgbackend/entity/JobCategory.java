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
@Table(name = "job_category")
public class JobCategory {

    @Id
    @Column(name = "JCat_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long jCatId;

    @Column(name = "job_category")
    private String jobCategory;

    @Column(name = "job_description", columnDefinition = "TEXT")
    private String jobDescription;

    @Column(name="jobCatPic")
    private String jobCaImg;

}