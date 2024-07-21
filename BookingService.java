package com.example.beautytutorbooking.service;

import com.example.beautytutorbooking.model.Booking;
import com.example.beautytutorbooking.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    public void saveBooking(Booking booking) {
        bookingRepository.save(booking);
    }
}
