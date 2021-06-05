import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../../models/hotel.model';
import { HotelService } from '../../../services/hotel.service';



@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.css']
})
export class TestpageComponent implements OnInit {
  hotels?: Hotel[];
  currentHotel?: Hotel;
  currentIndex = -1;
  name = '';

  constructor(private hotelService: HotelService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.hotelService.getAll()
      .subscribe(
        data => {
          this.hotels = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
