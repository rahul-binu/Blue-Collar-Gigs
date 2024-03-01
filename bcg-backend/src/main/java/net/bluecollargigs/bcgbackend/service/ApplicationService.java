package net.bluecollargigs.bcgbackend.service;

import java.util.List;

import net.bluecollargigs.bcgbackend.dto.ApplicationDto;

public interface ApplicationService {
    ApplicationDto createApplication(ApplicationDto applicationDto);

    ApplicationDto getAppData(Long jid, Long uid);

    List<ApplicationDto> getApplicationsByJId(Long id);
}
