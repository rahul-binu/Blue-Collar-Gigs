package net.bluecollargigs.bcgbackend.controllers;

import org.springframework.web.bind.annotation.RestController;

import net.bluecollargigs.bcgbackend.dto.JobDto;
import net.bluecollargigs.bcgbackend.service.JobService;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;



@RestController
@RequestMapping("api")
@CrossOrigin(origins = "http://localhost:3000")
public class JobController {

    private JobService jobService;

    private JobController(JobService jobService) {
        this.jobService = jobService;
    }

    @PostMapping("/job")
    public ResponseEntity<JobDto> createJob(@RequestBody JobDto jobDto) {
        JobDto savedjob = jobService.createJob(jobDto);
        return new ResponseEntity<>(savedjob, HttpStatus.CREATED);
    }

    @GetMapping("/job")
    public ResponseEntity<List<JobDto>> getAllJobs() {
        List<JobDto> jobs = jobService.getAllJob();
        return ResponseEntity.ok(jobs);
    }

    @GetMapping("/job/{id}")
    public ResponseEntity<JobDto> getJobById(@PathVariable("id") Long id) {
        JobDto jobs = jobService.getJobById(id);
        return ResponseEntity.ok(jobs);
    }
    

    @DeleteMapping("/jobs/{id}")
    public String deleteJob(@PathVariable("id") Long JobId) {

        return "Job Removed";
    }

    @PutMapping("/job/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<JobDto> updateJob(@PathVariable("id") Long id, @RequestBody JobDto jobDto) {
        JobDto updatedJob = jobService.updateJob(id, jobDto);
        return ResponseEntity.ok(updatedJob);
    }

    @PutMapping("/jobstatus/{id}")
    public ResponseEntity<JobDto> updateJobStatus(@PathVariable("id") Long id, @RequestBody JobDto jobDto) {
        JobDto updatedJob = jobService.updateJobStatus(id, jobDto);
        return ResponseEntity.ok(updatedJob);
    }

    @GetMapping("/jobsearch/{key}")
    public ResponseEntity<List<JobDto>> getWorkByKey(@PathVariable("key") String key) {
        List<JobDto> jobs = jobService.getJobByKey(key);
        return ResponseEntity.ok(jobs);
    }
    

}
