package net.bluecollargigs.bcgbackend.controllers;

import net.bluecollargigs.bcgbackend.dto.UserDto;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.bluecollargigs.bcgbackend.service.UserService;
// import org.springframework.web.bind.annotation.GetMapping;
 import org.springframework.web.bind.annotation.PathVariable;


@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api")
public class UserController {
    private UserService userService;

    public UserController(UserService userService){
        this.userService = userService;
    }

    // createUser REST API
    @PostMapping
    public ResponseEntity<UserDto> createUser(@RequestBody UserDto userDto){
        UserDto savedUser = userService.createUser(userDto);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

     @GetMapping("/user/{email}")
     public ResponseEntity<UserDto> getUserByEmail(@PathVariable("email") String email) {
         UserDto userDto = userService.getUserByEmail(email);
         return ResponseEntity.ok(userDto);
     }
    	@GetMapping("/profile")
	public ResponseEntity<UserDto> getUserFromToken(@RequestHeader("Authorization")String jwt) {
		
		UserDto userDto = userService.findUserByJwt(jwt);
		//user.setPassword(null);		
		return ResponseEntity.ok(userDto);		
	}

    // @GetMapping("/api/users/profile")
	// public User getUserFromToken(@RequestHeader("Authorization")String jwt) {
		
	// 	User user = userService.findUserByJwt(jwt);
		
	// 	// user.setPassword(null);
		
	// 	return user;
		
	// }
}
