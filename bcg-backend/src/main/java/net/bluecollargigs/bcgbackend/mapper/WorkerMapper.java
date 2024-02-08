package net.bluecollargigs.bcgbackend.mapper;

import net.bluecollargigs.bcgbackend.dto.WorkerDto;
import net.bluecollargigs.bcgbackend.entity.Worker;

public class WorkerMapper {

    public static WorkerDto mapToWorkerDto(Worker worker) {
        return new WorkerDto(
                worker.getWorkerId(),
                worker.getUserId(),
                worker.getSkills(),
                worker.getExperience(),
                worker.getEducation(),
                worker.getCertification()
                );

    }

    public static Worker mapToWorker(WorkerDto workerDto) {
        return new Worker(
                workerDto.getWorkerId(),
                workerDto.getUserId(),
                workerDto.getSkills(),
                workerDto.getExperience(),
                workerDto.getEducation(),
                workerDto.getCertification()
                );
    }
}
