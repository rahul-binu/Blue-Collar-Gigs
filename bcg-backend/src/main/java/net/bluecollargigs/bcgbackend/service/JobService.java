package net.bluecollargigs.bcgbackend.service;

import java.util.List;

import net.bluecollargigs.bcgbackend.dto.JobDto;

public interface JobService {
    JobDto createJob(JobDto jobDto);

    List<JobDto> getAllJob();

    void deleteJob(Long jobId);

    JobDto updateJob(Long id, JobDto updatedJob);
}
