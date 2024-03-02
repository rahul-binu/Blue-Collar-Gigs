package net.bluecollargigs.bcgbackend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ProfileDto {
    private Long profileId;
    private Long userId;
    private String profileFirstName;
    private String profileLastName;
    private Long userPhone;
    private String userEmail;
    private String aboutUser;
    private String address;
    private String district;
    private String state;
    private String pincode;
    private String profilePic;


}
