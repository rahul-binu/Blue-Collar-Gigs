package net.bluecollargigs.bcgbackend.dto;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class JobDto {
    private Long jobId;
    private Long recruiterId;
    private String jobTitle;
    private String jobCategory;
    private String jobDescription;
    private String location;
    private String state;
    private String district;
    private Integer pincode;
    private String estimatedTFTWork;
    private Float paymentPerDay;
    private Date workEstimatedStartDate;
    private String recruiterPhone;
    private String expectedSkills;
    private String recruiterEmail;
    private String jobStatus;    
    
}
