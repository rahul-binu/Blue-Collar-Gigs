package net.bluecollargigs.bcgbackend.service.impl;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import net.bluecollargigs.bcgbackend.dto.WorkerDto;
import net.bluecollargigs.bcgbackend.repository.WorkerRepository;
import net.bluecollargigs.bcgbackend.service.WorkerService;

@Service
@AllArgsConstructor
public class WorkerServiceImpl implements WorkerService{
    
    private WorkerRepository workerRepository;

    public WorkerDto createWorker(WorkerDto workerDto){
        Worker worker = WorkerMapper.mapToWorker(workerDto);
    }
}
