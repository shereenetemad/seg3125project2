package com.example.beautytutorbooking.service;

import com.example.beautytutorbooking.model.Booking;
import com.example.beautytutorbooking.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.DayOfWeek;
import java.time.LocalTime;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    public void saveBooking(Booking booking) {
        bookingRepository.save(booking);
    }

    public boolean isValidBooking(Booking booking) {
        DayOfWeek dayOfWeek = booking.getAppointmentDate().getDayOfWeek();
        LocalTime appointmentTime = booking.getAppointmentTime();
        LocalTime closingTime = LocalTime.of(20, 0);
        LocalTime openingTime = LocalTime.of(8, 0);

        // Check if the appointment is within operating hours and days
        return !dayOfWeek.equals(DayOfWeek.SATURDAY) && !dayOfWeek.equals(DayOfWeek.SUNDAY)
                && !appointmentTime.isBefore(openingTime) && !appointmentTime.isAfter(closingTime);
    }
}
