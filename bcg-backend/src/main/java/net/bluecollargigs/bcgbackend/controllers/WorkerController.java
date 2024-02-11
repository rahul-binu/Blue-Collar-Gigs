package net.bluecollargigs.bcgbackend.controllers;

import org.springframework.web.bind.annotation.RestController;

import net.bluecollargigs.bcgbackend.service.WorkerService;
import net.bluecollargigs.bcgbackend.dto.WorkerDto;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/worker")
public class WorkerController {

    private WorkerService workerService;

    public WorkerController(WorkerService WorkerService) {
        this.workerService = WorkerService;
    }

    @PostMapping
    public ResponseEntity<WorkerDto> createWorker(@RequestBody WorkerDto workerDto) {

        WorkerDto savedWorker = workerService.createWorker(workerDto);
        return new ResponseEntity<>(savedWorker, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<WorkerDto> getWorkerById(@PathVariable("id") Long workerId) {
        WorkerDto workerDto = workerService.getWorkerById(workerId);
        return ResponseEntity.ok(workerDto);
    }

    @PutMapping("{id}")
    public ResponseEntity<WorkerDto> updateWorker(@PathVariable("id") Long userId,
            @RequestBody WorkerDto updatedWorker) {
        WorkerDto workerDto = workerService.updateWorker(userId, updatedWorker);
        return ResponseEntity.ok(workerDto);
    }

}
