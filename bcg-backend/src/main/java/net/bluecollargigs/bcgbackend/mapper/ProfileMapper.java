package net.bluecollargigs.bcgbackend.mapper;

import net.bluecollargigs.bcgbackend.dto.ProfileDto;
import net.bluecollargigs.bcgbackend.entity.Profile;

public class ProfileMapper {

    public static ProfileDto mapToProfileDto(Profile profile) {

        return new ProfileDto(
                profile.getProfileId(),
                profile.getUserId(),
                profile.getProfileFirstName(),
                profile.getProfileLastName(),
                profile.getUserPhone(),
                profile.getUserEmail(),
                profile.getAboutUser());
    }

    public static Profile mapToProfile(ProfileDto profileDto) {

        return new Profile(
                profileDto.getProfileId(),
                profileDto.getUserId(),
                profileDto.getProfileFirstName(),
                profileDto.getProfileLastName(),
                profileDto.getUserPhone(),
                profileDto.getUserEmail(),
                profileDto.getAboutUser());

    }
}
