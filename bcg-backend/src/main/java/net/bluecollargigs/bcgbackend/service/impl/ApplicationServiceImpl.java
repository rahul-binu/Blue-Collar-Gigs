package net.bluecollargigs.bcgbackend.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import net.bluecollargigs.bcgbackend.dto.ApplicationDto;
import net.bluecollargigs.bcgbackend.dto.JobDto;
import net.bluecollargigs.bcgbackend.entity.Application;
import net.bluecollargigs.bcgbackend.entity.Job;
import net.bluecollargigs.bcgbackend.exception.ResourceNotFoundException;
import net.bluecollargigs.bcgbackend.mapper.ApplicationMapper;
import net.bluecollargigs.bcgbackend.mapper.JobMapper;
import net.bluecollargigs.bcgbackend.repository.ApplicationRepository;
import net.bluecollargigs.bcgbackend.service.ApplicationService;

@Service
@AllArgsConstructor
public class ApplicationServiceImpl implements ApplicationService {

    private ApplicationRepository applicationRepository;

    public ApplicationDto createApplication(ApplicationDto applicationDto) {
        Application application = ApplicationMapper.mapToApplication(applicationDto);
        Application savedApplication = applicationRepository.save(application);
        return ApplicationMapper.mapToApplicationDto(savedApplication);
    }

    public ApplicationDto getAppData(Long jid, Long uid) {
        Application appData = null;
        try {
            appData = applicationRepository.findByJobIdAndUserId(jid, uid);
            if (appData == null) {
                throw new ResourceNotFoundException(
                        "Application data not found for job ID: " + jid + " and user ID: " + uid);
            }
        } catch (ResourceNotFoundException e) {
            throw e;
        }
        return appData != null ? ApplicationMapper.mapToApplicationDto(appData) : null;
    }

    public List<ApplicationDto> getApplicationsByJId(Long id) {
        List<Application> applications = applicationRepository.findByJobId(id);

        return applications.stream()
                .map((application) -> ApplicationMapper
                        .mapToApplicationDto(application))
                .collect(Collectors.toList());
    }

}
