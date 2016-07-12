package de.siemering.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class ExampleDataController {

    @ResponseBody
    @RequestMapping("helloworld")
    public String helloWorld(){
        return "Hello World!";
    }




}
