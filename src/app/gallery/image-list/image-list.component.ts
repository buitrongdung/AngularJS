import {Component, OnInit} from '@angular/core';
import {Image} from "../../models/image";
import {ImageService} from "../../services/image/image.service";

@Component({
    selector: 'ng-image-list',
    templateUrl: './image-list.component.html',
    styles: []
})
export class ImageListComponent implements OnInit {

    private imageService;

    constructor() {
        this.imageService = new ImageService();
    }

    images: Image[] = [];

    selectedImage : Image;

    ngOnInit() {
        this.images = this.imageService.getImages();
    }

    onSelect(image : Image) {
        this.selectedImage = image;
    }

}
