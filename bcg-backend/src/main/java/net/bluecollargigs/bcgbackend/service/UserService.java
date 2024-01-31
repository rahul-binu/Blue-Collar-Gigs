package net.bluecollargigs.bcgbackend.service;

import net.bluecollargigs.bcgbackend.dto.UserDto;

public interface UserService {

    UserDto createUser(UserDto userDto);
}