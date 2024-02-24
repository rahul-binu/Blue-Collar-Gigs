package net.bluecollargigs.bcgbackend.mapper;

import net.bluecollargigs.bcgbackend.dto.WorkerDto;
import net.bluecollargigs.bcgbackend.entity.Worker;

public class WorkerMapper {

    public static WorkerDto mapToWorkerDto(Worker worker) {
        return new WorkerDto(
                worker.getWorkerId(),
                worker.getUserId(),
                worker.getSkills(),
                worker.getFlanguage(),
                worker.getSlanguage(),
                worker.getCertification()
                );

    }

    public static Worker mapToWorker(WorkerDto workerDto) {
        return new Worker(
                workerDto.getWorkerId(),
                workerDto.getUserId(),
                workerDto.getSkills(),
                workerDto.getFlanguage(),
                workerDto.getSlanguage(),
                workerDto.getCertification()
                );
    }
}
