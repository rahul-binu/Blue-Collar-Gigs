package net.bluecollargigs.bcgbackend.service.impl;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import net.bluecollargigs.bcgbackend.dto.ApplicationDto;
import net.bluecollargigs.bcgbackend.entity.Application;
import net.bluecollargigs.bcgbackend.mapper.ApplicationMapper;
import net.bluecollargigs.bcgbackend.repository.ApplicationRepository;
import net.bluecollargigs.bcgbackend.service.ApplicationService;

@Service
@AllArgsConstructor
public class ApplicationServiceImpl implements ApplicationService {

    private ApplicationRepository applicationRepository;

    public ApplicationDto createApplication(ApplicationDto applicationDto){
        Application application = ApplicationMapper.mapToApplication(applicationDto);
        Application savedApplication = applicationRepository.save(application);
        return ApplicationMapper.mapToApplicationDto(savedApplication);
    }

}
