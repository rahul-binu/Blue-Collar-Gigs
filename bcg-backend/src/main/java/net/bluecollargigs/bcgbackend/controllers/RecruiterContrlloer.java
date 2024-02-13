package net.bluecollargigs.bcgbackend.controllers;

import org.springframework.web.bind.annotation.RestController;

import net.bluecollargigs.bcgbackend.dto.RecruiterDto;
import net.bluecollargigs.bcgbackend.service.RecruiterService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class RecruiterContrlloer {

    private RecruiterService recruiterService;

    public RecruiterContrlloer(RecruiterService RecruiterService) {
        this.recruiterService = RecruiterService;
    }

    @PostMapping("/recruiter")
    public ResponseEntity<RecruiterDto> createRecruiter(@RequestBody RecruiterDto recruiterDto) {
        RecruiterDto savedRecruiter = recruiterService.createRecruiter(recruiterDto);
        return new ResponseEntity<>(savedRecruiter, HttpStatus.CREATED);
    }

}
