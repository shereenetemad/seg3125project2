package com.example.beautytutorbooking.controller;

import com.example.beautytutorbooking.model.Booking;
import com.example.beautytutorbooking.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @GetMapping("/")
    public String home(Model model) {
        return "index";
    }

    @GetMapping("/booking")
    public String bookingForm(Model model) {
        model.addAttribute("booking", new Booking());
        return "booking";
    }

    @PostMapping("/booking")
    public String bookingSubmit(@ModelAttribute Booking booking, Model model) {
        bookingService.saveBooking(booking);
        model.addAttribute("booking", booking);
        return "result";
    }
}
