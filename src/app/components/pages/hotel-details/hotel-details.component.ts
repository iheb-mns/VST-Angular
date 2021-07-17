import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../../models/hotel.model';
import { HotelService } from '../../../services/hotel.service';
import { BookingService } from '../../../services/booking.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/models/booking.model';
import { FormGroup, FormControl, Validators } from "@angular/forms";



@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {
  currentHotel: Hotel = {
    id: '',
    name: '',
    city: '',
    address: '',
    description: '',
    stars: '',
    phone: '',
    roomsNumber: '',
    minPrice: '',
    maxPrice: '',
    available: '',
  };

  booking: Booking = {
    id: '',
    roomType: '',
    persons: '',
    totalPrice: '',
    checkOutDate: '',
    checkInDate: '',
    status: '',
    hotel: this.currentHotel.id,
  }


  personsNumber = [
    {id: 1, persons: "1"},
  ];


  constructor(private hotelService: HotelService,
    private bookingService: BookingService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getHotel(this.route.snapshot.params.id);
  }

  getHotel(id: string): void {
    this.hotelService.get(id)
      .subscribe(
        data => {
          this.currentHotel = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  saveBooking(): void {
    const data = {
      id: this.booking.id,
      roomType: this.booking.roomType,
      persons: this.booking.persons,
      totalPrice: this.booking.totalPrice,
      checkInData: this.booking.checkInDate,
      checkOutDate: this.booking.checkOutDate,
      status: this.booking.status,
      hotel: this.currentHotel.id,
    };

    this.bookingService.create(data).subscribe(
      (response) => {
        if(this.booking.roomType === 'Chambre Double' && this.booking.persons === 1){
          this.booking.totalPrice === 100;
        }
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );

}
}