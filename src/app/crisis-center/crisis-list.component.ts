import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Crisis, CrisisService } from './crisis.service';

export interface Image {
  title: string;
  url: string;
  rows: number;
  name: string;
  human: string;
  age: number;
}

let IMAGES: Image[] = [
  { "title": "We are covered", "url": "../assets/0766c5e8_original.jpg", rows: 2, "name": "Mal", human: "Jeremy", age: 5},
  { "title": "Generation Gap", "url": "../assets/0766c5e8_original.jpg", rows: 1, "name": "Molly", human: "David", age: 5  },
  { "title": "Potter Me", "url": "../assets/0766c5e8_original.jpg", rows: 1, "name": "Sophie", human: "Alex", age: 8  },
  { "title": "Pre-School Kids", "url": "../assets/0766c5e8_original.jpg", rows: 2, "name": "Taz", human: "Joey", age: 11  },
  { "title": "Young Peter Cech", "url": "../assets/0766c5e8_original.jpg",  rows: 1, "name": "Kobe", human: "Igor", age: 5  } 
];

@Component({
  templateUrl: 'crisis-list.component.html',
  styles: [`
    .carousel{
    overflow:hidden;
    width:100%;
    }
    .slides{
        list-style:none;
        position:relative;
        width:500%; /* Number of panes * 100% */
        overflow:hidden; /* Clear floats */
            /* Slide effect Animations*/
        -moz-animation:carousel 30s infinite;
        -webkit-animation:carousel 30s infinite;
        animation:carousel 30s infinite;
    }
    .slides > li{
        position:relative;
        float:left;
        width: 20%; /* 100 / number of panes */
    }
    .carousel img{
        display:block;
        width:100%;
        max-width:100%;
    }
    .carousel h2{
        margin-bottom: 0;
        font-size:1em;
        padding:1.5em 0.5em 1.5em 0.5em;
        position:absolute;
        right:0px;
        bottom:0px;
        left:0px;
        text-align:center;
        color:#fff;
        background-color:rgba(0,0,0,0.75);
        text-transform: uppercase;
    }

    @keyframes carousel{
        0%    { left:-5%; }
        11%   { left:-5%; }
        12.5% { left:-105%; }
        23.5% { left:-105%; }
        25%   { left:-205%; }
        36%   { left:-205%; }
        37.5% { left:-305%; }
        48.5% { left:-305%; }
        50%   { left:-405%; }
        61%   { left:-405%; }
        62.5% { left:-305%; }
        73.5% { left:-305%; }
        75%   { left:-205%; }
        86%   { left:-205%; }
        87.5% { left:-105%; }
        98.5% { left:-105%; }
        100%  { left:-5%; }
    }
  `]
})
export class CrisisListComponent implements OnInit {
  
  crises: Crisis[];

  images = IMAGES;

  public selectedId: number;
  constructor(
    private service: CrisisService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  isSelected(crisis: Crisis) {
    return crisis.id === this.selectedId;
  }
  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.selectedId = params['id'];
      this.service.getCrises()
        .then(crises => this.crises = crises);
    });
  }
  onSelect(crisis: Crisis) {
    this.selectedId = crisis.id;
    // Navigate with relative link
    this.router.navigate([crisis.id], { relativeTo: this.route });
  }

  asSelected(image: Image) {
    return image.rows === this.selectedId;
  }

  inSelect(image: Image) {
    this.selectedId = image.rows;
    // Navigate with relative link
    this.router.navigate([image.rows], { relativeTo: this.route });
  }
}
