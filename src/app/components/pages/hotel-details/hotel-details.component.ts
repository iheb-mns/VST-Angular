import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../../models/hotel.model';
import { HotelService } from '../../../services/hotel.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {
  currentHotel: Hotel = {
    name: ''
  };

  constructor(private hotelService: HotelService,
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
}
