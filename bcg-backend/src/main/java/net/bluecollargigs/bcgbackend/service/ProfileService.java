package net.bluecollargigs.bcgbackend.service;

import net.bluecollargigs.bcgbackend.dto.ProfileDto;

public interface ProfileService {

    ProfileDto createProfile(ProfileDto profileDto);

    ProfileDto updateProfile(Long id, ProfileDto updatedProfile);

    ProfileDto getProfileDetails(Long id);
}
