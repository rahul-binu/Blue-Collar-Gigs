package net.bluecollargigs.bcgbackend.service.impl;

import net.bluecollargigs.bcgbackend.service.UserService;
import net.bluecollargigs.bcgbackend.dto.UserDto;
import net.bluecollargigs.bcgbackend.mapper.UserMapper;
import net.bluecollargigs.bcgbackend.repository.UserRepository;
import net.bluecollargigs.bcgbackend.entity.User;
// import net.bluecollargigs.bcgbackend.exception.ResourceNotFoundException;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    // create user service
    @Override
    public UserDto createUser(UserDto userDto) {
        User user = UserMapper.mapToUser(userDto);
        User savedUser = userRepository.save(user);
        return UserMapper.mapToUserDto(savedUser);

    }

    

    // commented becouse we are adding the new code that i coppied fron ajay and
    // removing the part becouse error in the
    // orElseThrow and removing te opotional valuie from the user reopsitory
    // @Override
    // public UserDto getUserByEmail(String email) {
    // User user = userRepository.findByEmail(email)
    // .orElseThrow(() -> new ResourceNotFoundException(email + " No User with this
    // mail"));
    // return UserMapper.mapToUserDto(user);
    // }

    @Override
    public User findUserBYEmail(String email) {
        // TODO Auto-generated method stub
        return null;
    }

}
