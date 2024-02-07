package net.bluecollargigs.bcgbackend.service;

import net.bluecollargigs.bcgbackend.dto.UserDto;

public interface WorkerService {

    WorkerDto createWorker(WorkerDto workerDto);
}