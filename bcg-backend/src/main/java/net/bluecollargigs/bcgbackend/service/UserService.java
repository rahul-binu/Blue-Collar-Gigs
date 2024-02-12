package net.bluecollargigs.bcgbackend.service;

import net.bluecollargigs.bcgbackend.dto.UserDto;
import net.bluecollargigs.bcgbackend.entity.*;

public interface UserService {

    UserDto createUser(UserDto userDto);
   // UserDto getUserByEmail(String email);
    
	public User findUserBYEmail(String email);

}