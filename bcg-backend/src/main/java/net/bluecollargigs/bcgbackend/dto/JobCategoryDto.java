package net.bluecollargigs.bcgbackend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class JobCategoryDto {
    private Long jCatId;
    private String jobCategory;
    private String jobDescription;
    private String jobCaImg;
}
