package net.bluecollargigs.bcgbackend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "profile")
public class Profile {
    
    @Id
    @Column(name = "proile_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long profileId;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "p_f_name")
    private String profileFirstName;

    @Column(name = "p_l_name")
    private String profileLastName;

    @Column(name = "user_phone")
    private Integer userPhone;

    @Column(name = "user_email")
    private String userEmail;

    @Column(name = "about_user")
    private String aboutUser;

    @Column(name = "address")
    private String address;

    @Column(name = "district")
    private String district;

    @Column(name = "state")
    private String state;

    @Column(name = "pincode")
    private String pincode;

    @Column(name = "profile_pic")
    private String profilePic;

}
