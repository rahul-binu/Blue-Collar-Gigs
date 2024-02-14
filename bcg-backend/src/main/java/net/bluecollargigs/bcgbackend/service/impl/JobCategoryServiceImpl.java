package net.bluecollargigs.bcgbackend.service.impl;

import net.bluecollargigs.bcgbackend.dto.JobCategoryDto;
import net.bluecollargigs.bcgbackend.entity.JobCategory;
import net.bluecollargigs.bcgbackend.mapper.JobCategoryMapper;
import net.bluecollargigs.bcgbackend.repository.JobCategoryRepository;
import net.bluecollargigs.bcgbackend.service.JobCategoryService;

public class JobCategoryServiceImpl implements JobCategoryService {

    private JobCategoryRepository jobCategoryRepository;
    private JobCategoryMapper jobCategoryMapper;

    public JobCategoryDto createJobCategory(JobCategoryDto jobCategoryDto) {

        JobCategory jobCategory = jobCategoryMapper.mapToJobCategory(jobCategoryDto);
        JobCategory savedJobCategory = jobCategoryRepository.save(jobCategory);
        
        return jobCategoryMapper.mapToJobCategoryDto(savedJobCategory);
    }
}
