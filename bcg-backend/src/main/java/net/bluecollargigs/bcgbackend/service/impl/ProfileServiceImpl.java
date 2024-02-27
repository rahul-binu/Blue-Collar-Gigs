package net.bluecollargigs.bcgbackend.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import net.bluecollargigs.bcgbackend.dto.ProfileDto;
import net.bluecollargigs.bcgbackend.entity.Profile;
import net.bluecollargigs.bcgbackend.exception.ResourceNotFoundException;
import net.bluecollargigs.bcgbackend.mapper.ProfileMapper;
import net.bluecollargigs.bcgbackend.mapper.WorkerMapper;
import net.bluecollargigs.bcgbackend.repository.ProfileRepository;
import net.bluecollargigs.bcgbackend.service.ProfileService;

@Service
@AllArgsConstructor
public class ProfileServiceImpl implements ProfileService {

    private ProfileRepository profileRepository;

    public ProfileDto createProfile(ProfileDto profileDto) {
        Profile profile = ProfileMapper.mapToProfile(profileDto);
        Profile savedProfile = profileRepository.save(profile);
        return ProfileMapper.mapToProfileDto(savedProfile);
    }

    public ProfileDto updateProfile(Long id, ProfileDto updatedProfile) {
        Profile profile = profileRepository.findByUserId(id).orElseThrow(
                () -> new ResourceNotFoundException("NO profile found with " + id));

        profile.setProfileFirstName(updatedProfile.getProfileFirstName());
        profile.setProfileLastName(updatedProfile.getProfileLastName());
        profile.setUserPhone(updatedProfile.getUserPhone());
        profile.setUserEmail(updatedProfile.getUserEmail());
        profile.setAboutUser(updatedProfile.getAboutUser());
        profile.setAddress(updatedProfile.getAddress());
        profile.setDistrict(updatedProfile.getDistrict());
        profile.setState(updatedProfile.getState());
        profile.setPincode(updatedProfile.getPincode());
        profile.setProfilePic(updatedProfile.getProfilePic());

        Profile updatedProfileObj = profileRepository.save(profile);

        return ProfileMapper.mapToProfileDto(updatedProfileObj);
    }

    public ProfileDto getProfileDetails(Long id) {
        Profile profile = profileRepository.findByUserId(id)
                .orElseThrow(() -> new ResourceNotFoundException("no Profile"));
        return ProfileMapper.mapToProfileDto(profile);
    }

    public List<ProfileDto> getAllProfiles() {
        List<Profile> profiles = profileRepository.findAll();
        return profiles.stream().map((profile) -> ProfileMapper.mapToProfileDto(profile))
                .collect(Collectors.toList());
    }
}