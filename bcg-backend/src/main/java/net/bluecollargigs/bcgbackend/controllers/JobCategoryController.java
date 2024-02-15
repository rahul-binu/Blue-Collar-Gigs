package net.bluecollargigs.bcgbackend.controllers;

import org.springframework.web.bind.annotation.RestController;

import net.bluecollargigs.bcgbackend.dto.JobCategoryDto;
import net.bluecollargigs.bcgbackend.service.JobCategoryService;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@CrossOrigin("*")
@RequestMapping("/auth")
public class JobCategoryController {

    private JobCategoryService jobCategoryService;

    public JobCategoryController(JobCategoryService jobCategoryService) {
        this.jobCategoryService = jobCategoryService;
    }

    @PostMapping("/jobcat")
    public ResponseEntity<JobCategoryDto> createJobCategory(@RequestBody JobCategoryDto jobCategoryDto) {

        JobCategoryDto jobCategory = jobCategoryService.createJobCategory(jobCategoryDto);

        return new ResponseEntity<>(jobCategory, HttpStatus.CREATED);
    }

    @GetMapping("/jobcat")
    public ResponseEntity<List<JobCategoryDto>> getAllJobCategory() {
        List<JobCategoryDto> jobCategories = jobCategoryService.getAllJobCategory();
        return ResponseEntity.ok(jobCategories);
    }

    @PutMapping("/jobcat/{id}")
    public ResponseEntity<JobCategoryDto> updarteJobCat(@PathVariable Long id, @RequestBody JobCategoryDto newJobCat) {

        JobCategoryDto jobCategory = jobCategoryService.updateJobCat(id, newJobCat);
        return ResponseEntity.ok(jobCategory);
    }

    @DeleteMapping("/jobcat/{id}")
    public ResponseEntity<String> deleteJobCat(@PathVariable("id") Long id) {
        jobCategoryService.deleteJobCat(id);
        return ResponseEntity.ok("Job category successfully deleted");
    }

}
