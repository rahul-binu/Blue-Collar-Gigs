package net.bluecollargigs.bcgbackend.mapper;

import net.bluecollargigs.bcgbackend.dto.JobCategoryDto;
import net.bluecollargigs.bcgbackend.entity.JobCategory;

public class JobCategoryMapper {
    public JobCategoryDto mapToJobCategoryDto(JobCategory jobCategory) {
        return new JobCategoryDto(
            jobCategory.getJobCategory()
        );
    }

    public JobCategory mapToJobCategory(JobCategoryDto jobCategoryDto) {
        return new JobCategory(
            jobCategoryDto.getJobCategory()
        );
    }
}
