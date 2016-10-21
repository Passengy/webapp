import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Room, HomeService }  from './home.service';

@Component({
  templateUrl: 'rooms-detail.component.html',
  styleUrls: ['rooms-detail.component.css']
})
export class RoomDetaiComponent implements OnInit {

  room: Room;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HomeService) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
       let id = +params['id']; // (+) converts string 'id' to a number
       this.service.getRoom(id).then(room => this.room = room);
     });
  }
  gotoDetail() {
    let roomId = this.room ? this.room.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    this.router.navigate(['/rooms', { id: roomId }]);
  }
}
