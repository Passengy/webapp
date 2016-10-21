// TODO SOMEDAY: Feature Componetized like CrisisCenter
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Room, HomeService }  from './home.service';


@Component({
  templateUrl: 'rooms-list.component.html',
  styleUrls: ['rooms-list.component.css']
})

export class RoomListComponent implements OnInit {

  rooms: Room[];

  private selectedId: number;

  constructor(
    private service: HomeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
        this.selectedId = +params['rows'];
        this.service.getRooms()
          .then(rooms => this.rooms = rooms);
      });
  }

  isSelected(room: Room) { return room.rows === this.selectedId; }
  
  onSelect(room: Room) {
    this.router.navigate(['/rooms', room.rows]);
  }
}
