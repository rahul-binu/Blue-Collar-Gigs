package net.bluecollargigs.bcgbackend.service;

import org.springframework.stereotype.Service;

import net.bluecollargigs.bcgbackend.dto.JobCategoryDto;

@Service
public interface JobCategoryService {

    JobCategoryDto createJobCategory(JobCategoryDto jobCategoryDto);
    
} 