package net.bluecollargigs.bcgbackend.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import net.bluecollargigs.bcgbackend.dto.JobDto;
import net.bluecollargigs.bcgbackend.entity.Job;
import net.bluecollargigs.bcgbackend.exception.ResourceNotFoundException;
import net.bluecollargigs.bcgbackend.mapper.JobMapper;
import net.bluecollargigs.bcgbackend.repository.JobRepository;
import net.bluecollargigs.bcgbackend.service.JobService;

@Service
@AllArgsConstructor
public class JobServiceImpl implements JobService {

    private JobRepository jobRepository;

    public JobDto createJob(JobDto jobDto) {
        Job job = JobMapper.mapToJob(jobDto);
        Job savedJob = jobRepository.save(job);
        return JobMapper.mapToJobDto(savedJob);
    }

    public List<JobDto> getAllJob() {
        List<Job> jobs = jobRepository.findAll();
        return jobs.stream().map((job) -> JobMapper.mapToJobDto(job))
                .collect(Collectors.toList());
    }

    public void deleteJob(Long jobId) {
        jobRepository.findById(jobId)
                .orElseThrow(() -> new ResourceNotFoundException("no job find with" + jobId));
        jobRepository.deleteById(jobId);
    }

    public JobDto updateJob(Long id, JobDto updatedJob) {
        Job job = jobRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No job" + id));

        job.setJobTitle(updatedJob.getJobTitle());
        job.setJobCategory(updatedJob.getJobCategory());
        job.setJobDescription(updatedJob.getJobDescription());
        job.setLocation(updatedJob.getLocation());
        job.setState(updatedJob.getState());
        job.setDistrict(updatedJob.getDistrict());
        job.setPincode(updatedJob.getPincode());
        job.setEstimatedTFTWork(updatedJob.getEstimatedTFTWork());
        job.setPaymentPerDay(updatedJob.getPaymentPerDay());
        job.setWorkEstimatedStartDate(updatedJob.getWorkEstimatedStartDate());
        job.setRecruiterPhone(updatedJob.getRecruiterPhone());
        job.setExpectedSkills(updatedJob.getExpectedSkills());
        job.setRecruiterEmail(updatedJob.getRecruiterEmail());
        job.setTransportation(updatedJob.getTransportation());

        Job updatedJobDetails = jobRepository.save(job);

        return JobMapper.mapToJobDto(updatedJobDetails);
    }
}
