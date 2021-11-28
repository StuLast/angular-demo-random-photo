import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

export interface IPhoto {
  urls: {
    small: string,
  },
  links: {
    html: string
  }
  description: string
}

@Component({
  selector: 'app-photo-finder',
  templateUrl: './photo-finder.component.html',
  styleUrls: ['./photo-finder.component.css']
})
export class PhotoFinderComponent implements OnInit {
  @Input() image: IPhoto | null = null;
  @Output() onGetPhoto = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick = () => {
    this.onGetPhoto.emit();
  }

}
