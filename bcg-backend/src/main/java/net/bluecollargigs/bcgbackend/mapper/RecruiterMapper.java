package net.bluecollargigs.bcgbackend.mapper;

import net.bluecollargigs.bcgbackend.dto.RecruiterDto;
import net.bluecollargigs.bcgbackend.entity.Recruiter;

public class RecruiterMapper {
    public static RecruiterDto mapTRecruiterDto(Recruiter recruiter) {
        return new RecruiterDto(
                recruiter.getRecruiterId(),
                recruiter.getUserId());
    }

    public static Recruiter mapToRecruiter(RecruiterDto recruiterDto) {
        return new Recruiter(
                recruiterDto.getRecruiterId(),
                recruiterDto.getUserId());
    }
}
