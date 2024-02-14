package net.bluecollargigs.bcgbackend.controllers;

import org.springframework.web.bind.annotation.RestController;

import net.bluecollargigs.bcgbackend.dto.JobCategoryDto;
import net.bluecollargigs.bcgbackend.service.JobCategoryService;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@CrossOrigin("*")
@RequestMapping("api")
public class JobCategoryController {

    private JobCategoryService jobCategoryService;

    public JobCategoryController(JobCategoryService jobCategoryService) {
        this.jobCategoryService = jobCategoryService;
    }

    @PostMapping("/jobCat")
    public ResponseEntity<JobCategoryDto> createJobCategory(JobCategoryDto jobCategoryDto) {

        JobCategoryDto jobCategory = jobCategoryService.createJobCategory(jobCategoryDto);

        return new ResponseEntity<>(jobCategory,HttpStatus.CREATED);
    }

    @GetMapping()
    public List<JobCategoryDto> getAllJobCategory() {
        
        return new String();
    }
    
}
