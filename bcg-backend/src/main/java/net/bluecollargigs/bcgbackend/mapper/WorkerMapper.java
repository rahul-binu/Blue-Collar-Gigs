package net.bluecollargigs.bcgbackend.mapper;

import net.bluecollargigs.bcgbackend.dto.WorkerDto;
import net.bluecollargigs.bcgbackend.entity.Worker;

public class WorkerMapper {

    public static WorkerDto mapToWorkerDto(Worker worker) {
        return new WorkerDto(
            worker.getId(),
        );

    }
}
