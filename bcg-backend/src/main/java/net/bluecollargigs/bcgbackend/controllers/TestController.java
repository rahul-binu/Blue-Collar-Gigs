package net.bluecollargigs.bcgbackend.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @RequestMapping("/hello")
    public String hello(){
        return "Hello World !";
    }

    @GetMapping("/GetMapping")
    public String Mapping(){
        return "Get  Mapping";
    }
    
}
