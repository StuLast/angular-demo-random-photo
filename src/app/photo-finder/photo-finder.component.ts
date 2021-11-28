import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-finder',
  templateUrl: './photo-finder.component.html',
  styleUrls: ['./photo-finder.component.css']
})
export class PhotoFinderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick = () => {
    console.log("Button Clicked");
  }

}
