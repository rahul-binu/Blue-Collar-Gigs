package net.bluecollargigs.bcgbackend.service.impl;

import net.bluecollargigs.bcgbackend.service.UserService;
import net.bluecollargigs.bcgbackend.dto.UserDto;
import net.bluecollargigs.bcgbackend.mapper.UserMapper;
import net.bluecollargigs.bcgbackend.repository.UserRepository;
import net.bluecollargigs.bcgbackend.entity.User;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService{

    private UserRepository userRepository;

    // create user service 
    @Override
    public UserDto createUser(UserDto userDto){
        User user = UserMapper.mapToUser(userDto);
        User savedUser = userRepository.save(user);
        return UserMapper.mapToUserDto(savedUser);
    }

}