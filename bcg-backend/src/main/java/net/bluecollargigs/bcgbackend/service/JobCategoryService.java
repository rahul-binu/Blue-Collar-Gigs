package net.bluecollargigs.bcgbackend.service;

import java.util.List;

import net.bluecollargigs.bcgbackend.dto.JobCategoryDto;

public interface JobCategoryService {

    JobCategoryDto createJobCategory(JobCategoryDto jobCategoryDto);

    List<JobCategoryDto> getAllJobCategory();

    JobCategoryDto updateJobCat(String id, JobCategoryDto newJobCat);

    void deleteJobCat(String id);
    
} 