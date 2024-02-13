package net.bluecollargigs.bcgbackend.controllers;

import org.springframework.web.bind.annotation.RestController;

import net.bluecollargigs.bcgbackend.dto.ProfileDto;
import net.bluecollargigs.bcgbackend.service.ProfileService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class ProfileController {

    private ProfileService profileService;

    public ProfileController(ProfileService profileService) {
        this.profileService = profileService;
    }

    @PostMapping("/profile")
    public ResponseEntity<ProfileDto> createProfile(@RequestBody ProfileDto profileDto) {
        ProfileDto savedProfile = profileService.createProfile(profileDto);
        return new ResponseEntity<>(savedProfile, HttpStatus.CREATED);
    }

    @PutMapping("/profile/{id}")
    public ResponseEntity<ProfileDto> updateProfile(@PathVariable("id") Long id,
            @RequestBody ProfileDto updatedProfile) {

        ProfileDto profileDto = profileService.updateProfile(id, updatedProfile);
        return ResponseEntity.ok(profileDto);
    }

    @GetMapping("/profile/{id}")
    public ResponseEntity<ProfileDto> getProfileDetails(@PathVariable("id") Long id) {
        ProfileDto profiledDto = profileService.getProfileDetails(id);
        return ResponseEntity.ok(profiledDto);
    }

}
