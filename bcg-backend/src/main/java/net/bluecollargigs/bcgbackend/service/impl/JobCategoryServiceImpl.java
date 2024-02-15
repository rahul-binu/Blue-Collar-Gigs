package net.bluecollargigs.bcgbackend.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import net.bluecollargigs.bcgbackend.dto.JobCategoryDto;
import net.bluecollargigs.bcgbackend.entity.JobCategory;
import net.bluecollargigs.bcgbackend.exception.ResourceNotFoundException;
import net.bluecollargigs.bcgbackend.mapper.JobCategoryMapper;
import net.bluecollargigs.bcgbackend.repository.JobCategoryRepository;
import net.bluecollargigs.bcgbackend.service.JobCategoryService;

@Service
@AllArgsConstructor
public class JobCategoryServiceImpl implements JobCategoryService {

    private JobCategoryRepository jobCategoryRepository;

    public JobCategoryDto createJobCategory(JobCategoryDto jobCategoryDto) {

        JobCategory jobCategory = JobCategoryMapper.mapToJobCategory(jobCategoryDto);
        JobCategory savedJobCategory = jobCategoryRepository.save(jobCategory);

        return JobCategoryMapper.mapToJobCategoryDto(savedJobCategory);
    }

    public List<JobCategoryDto> getAllJobCategory() {
        List<JobCategory> jobCategories = jobCategoryRepository.findAll();

        return jobCategories.stream().map((jobCategory) -> JobCategoryMapper.mapToJobCategoryDto(jobCategory))
                .collect(Collectors.toList());
    }

    public JobCategoryDto updateJobCat(Long id, JobCategoryDto newJobCat){

        JobCategory jobCategory = jobCategoryRepository.findById(id)
        .orElseThrow(()->new ResourceNotFoundException("No Job Category " + id));

        jobCategory.setJobCategory(newJobCat.getJobCategory());

        JobCategory updatedJobCat = jobCategoryRepository.save(jobCategory);

       return JobCategoryMapper.mapToJobCategoryDto(updatedJobCat);
    }

    public void deleteJobCat(Long id){
        JobCategory jobCategory = jobCategoryRepository.findById(id)
        .orElseThrow(()-> new ResourceNotFoundException("No Job Cat"));
        jobCategoryRepository.deleteById(id);
    }

}
