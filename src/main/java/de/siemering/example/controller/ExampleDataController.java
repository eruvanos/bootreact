package de.siemering.example.controller;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/counter")
public class ExampleDataController {

    private long counter = 0;

    @RequestMapping(method = RequestMethod.PUT)
    public void setCounter(@RequestBody long counter){
        this.counter = counter;
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.GET)
    public long getCounter(){
        return counter;
    }




}
