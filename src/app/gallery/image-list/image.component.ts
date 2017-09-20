import {Component, Input, OnInit} from '@angular/core';
import { Image} from "../../models/image";

@Component({
  selector: 'ng-image',
  templateUrl: './image.component.html',
  styles: []
})
export class ImageComponent implements OnInit {

  constructor() { }

  @Input() img: Image;

  ngOnInit() {

  }

}
