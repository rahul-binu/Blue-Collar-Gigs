package net.bluecollargigs.bcgbackend.mapper;

import net.bluecollargigs.bcgbackend.dto.JobDto;
import net.bluecollargigs.bcgbackend.entity.Job;

public class JobMapper {

    public static JobDto mapToJobDto(Job job) {

        return new JobDto(
                job.getJobId(),
                job.getRecruiterId(),
                job.getJobTitle(),
                job.getJobCategory(),
                job.getJobDescription(),
                job.getLocation(),
                job.getState(),
                job.getDistrict(),
                job.getPincode(),
                job.getEstimatedTFTWork(),
                job.getPaymentPerDay(),
                job.getWorkEstimatedStartDate(),
                job.getRecruiterPhone(),
                job.getExpectedSkills(),
                job.getRecruiterEmail(),
                job.getTransportation());
    }

    public static Job mapToJob(JobDto jobDto) {

        return new Job(
                jobDto.getJobId(),                
                jobDto.getRecruiterId(),
                jobDto.getJobTitle(),
                jobDto.getJobCategory(),
                jobDto.getJobDescription(),
                jobDto.getLocation(),
                jobDto.getState(),
                jobDto.getDistrict(),
                jobDto.getPincode(),
                jobDto.getEstimatedTFTWork(),
                jobDto.getPaymentPerDay(),
                jobDto.getWorkEstimatedStartDate(),
                jobDto.getRecruiterPhone(),
                jobDto.getExpectedSkills(),
                jobDto.getRecruiterEmail(),
                jobDto.getTransportation());
    }
}
