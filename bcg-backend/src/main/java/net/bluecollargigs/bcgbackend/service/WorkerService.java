package net.bluecollargigs.bcgbackend.service;

// import java.util.List;

import net.bluecollargigs.bcgbackend.dto.WorkerDto;

public interface WorkerService {

    WorkerDto createWorker(WorkerDto workerDto);
    WorkerDto getWorkerById(Long workerId);
}