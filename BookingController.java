package com.example.beautytutorbooking.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class BookingController {

    @GetMapping("/")
    public String home(Model model) {
        return "index";
    }

    @GetMapping("/booking")
    public String booking(Model model) {
        return "booking";
    }
}
