package net.bluecollargigs.bcgbackend.mapper;

import net.bluecollargigs.bcgbackend.dto.ApplicationDto;
import net.bluecollargigs.bcgbackend.entity.Application;

public class ApplicationMapper {

    public static Application mapToApplication(ApplicationDto applicationDto) {
        return new Application(
                applicationDto.getApplicationId(),
                applicationDto.getJobId(),
                applicationDto.getApplicantId());
    }

    public static ApplicationDto mapToApplicationDto(Application application) {
        return new ApplicationDto(
                application.getApplicationId(),
                application.getJobId(),
                application.getApplicantId());
    }
}
