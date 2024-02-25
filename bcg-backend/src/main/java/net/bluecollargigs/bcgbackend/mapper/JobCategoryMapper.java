package net.bluecollargigs.bcgbackend.mapper;

import net.bluecollargigs.bcgbackend.dto.JobCategoryDto;
import net.bluecollargigs.bcgbackend.entity.JobCategory;

public class JobCategoryMapper {
    public static JobCategoryDto mapToJobCategoryDto(JobCategory jobCategory) {
        return new JobCategoryDto(
                jobCategory.getJCatId(),
                jobCategory.getJobCategory(),
                jobCategory.getJobDescription(),
                jobCategory.getJobCaImg());
    }

    public static JobCategory mapToJobCategory(JobCategoryDto jobCategoryDto) {
        return new JobCategory(
                jobCategoryDto.getJCatId(),
                jobCategoryDto.getJobCategory(),
                jobCategoryDto.getJobDescription(),
               jobCategoryDto.getJobCaImg() );
    }
}
