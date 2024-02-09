package net.bluecollargigs.bcgbackend.service.impl;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;

import net.bluecollargigs.bcgbackend.dto.WorkerDto;
import net.bluecollargigs.bcgbackend.mapper.WorkerMapper;
import net.bluecollargigs.bcgbackend.repository.WorkerRepository;
import net.bluecollargigs.bcgbackend.service.WorkerService;
import net.bluecollargigs.bcgbackend.entity.Worker;
import net.bluecollargigs.bcgbackend.exception.ResourceNotFoundException;

@Service
@AllArgsConstructor
public class WorkerServiceImpl implements WorkerService {

    private WorkerRepository workerRepository;

    @Override
    public WorkerDto createWorker(WorkerDto workerDto) {
        Worker worker = WorkerMapper.mapToWorker(workerDto);
        @SuppressWarnings("null")
        Worker savedWorker = workerRepository.save(worker);
        return WorkerMapper.mapToWorkerDto(savedWorker);
    }

    @Override
    public WorkerDto getWorkerById(Long workerId) {
        @SuppressWarnings("null")
        Worker worker = workerRepository.findById(workerId)
        .orElseThrow(() -> new ResourceNotFoundException(workerId +" worker not found"));
        return WorkerMapper.mapToWorkerDto(worker);
    }
}
