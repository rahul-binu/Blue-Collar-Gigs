package net.bluecollargigs.bcgbackend.mapper;

import net.bluecollargigs.bcgbackend.dto.UserDto;
import net.bluecollargigs.bcgbackend.entity.User;

public class UserMapper {
    public static UserDto mapToUserDto(User user){
        return new UserDto(
            user.getId(),
            user.getEmail(),
            user.getPassword(),
            user.getUserType(),
            user.getRegistrationDate()
        );
    }

    public static User mapToUser(UserDto userDto){
        return new User(
            userDto.getId(),
            userDto.getEmail(),
            userDto.getPassword(),
            userDto.getUserType(),
            userDto.getRegistrationDate()
        );
    }
}
