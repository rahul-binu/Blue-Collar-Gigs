package net.bluecollargigs.bcgbackend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ApplicationDto {
    private Long applicationId;
    private Long jobId;
    private Long applicantId;
    private String ewpd;
    private String whyWeHire;
}
