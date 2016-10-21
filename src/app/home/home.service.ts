import { Injectable } from '@angular/core';

export interface Room {
  title: string;
  url: string;
  rows: number;
  name: string;
  human: string;
  age: number;
}

let ROOMS: Room[] = [
  { "title": "We are covered", "url": "../assets/0766c5e8_original.jpg", rows: 2, "name": "Mal", human: "We offer a single bedroom in our classic Victorian London terraced ...", age: 5},
  { "title": "Generation Gap", "url": "../assets/0d20d386_original.jpg", rows: 1, "name": "Molly", human: "David", age: 5  },
  { "title": "Potter Me", "url": "../assets/1ec428ce_original.jpg", rows: 1, "name": "Sophie", human: "Alex", age: 8  },
  { "title": "Pre-School Kids", "url": "../assets/439b54b4_original.jpg", rows: 2, "name": "Taz", human: "Joey", age: 11  },
  { "title": "Young Peter Cech", "url": "../assets/68f92799_original.jpg",  rows: 1, "name": "Kobe", human: "Igor", age: 5  } 
];

let roomsPromise = Promise.resolve(ROOMS);


@Injectable()

export class HomeService {

  getRooms() { return roomsPromise; }

  getRoom(rows: number | string) {
    return roomsPromise
      .then(rooms => rooms.find(room => room.rows === +rows));
  }
}
