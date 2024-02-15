package net.bluecollargigs.bcgbackend.service;

import java.util.List;

import net.bluecollargigs.bcgbackend.dto.JobCategoryDto;

public interface JobCategoryService {

    JobCategoryDto createJobCategory(JobCategoryDto jobCategoryDto);

    List<JobCategoryDto> getAllJobCategory();

    JobCategoryDto updateJobCat(Long id, JobCategoryDto newJobCat);

    void deleteJobCat(Long id);

    
} 