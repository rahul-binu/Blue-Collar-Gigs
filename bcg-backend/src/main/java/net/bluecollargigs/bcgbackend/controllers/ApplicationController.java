package net.bluecollargigs.bcgbackend.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import net.bluecollargigs.bcgbackend.dto.ApplicationDto;
import net.bluecollargigs.bcgbackend.service.ApplicationService;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class ApplicationController {

    private ApplicationService applicationService;

    public ApplicationController(ApplicationService applicationService) {
        this.applicationService = applicationService;
    }

    @PostMapping("/application")
    public ResponseEntity<ApplicationDto> createApplication(@RequestBody ApplicationDto applicationDto) {
        ApplicationDto sApplicationDto = applicationService.createApplication(applicationDto);
        return new ResponseEntity<>(sApplicationDto, HttpStatus.CREATED);
    }


    @DeleteMapping("/application/{id}")
    public String deleteApplication(@PathVariable("id") Long JobId) {

        return "app Removed";
    }

}
