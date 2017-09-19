import {Injectable} from '@angular/core';
import  {Image} from "../../models/image";

@Injectable()
export class ImageService {

    constructor() {
    }

    images: Image[] = [new Image('1', 'The First image', 'First image description', 'img1.jpg', 'img1-1.jpg'),
        new Image('2', 'The Second image', 'Second image description', 'img2.jpg', 'img2-1.jpg'),
        new Image('3', 'The Third image', 'Third image description', 'img3.jpg', 'img3-1.jpg'),
        new Image('4', 'The Fourth image', 'Fourth image description', 'img4.jpg', 'img4-1.jpg'),
        new Image('5', 'The Fifth image', 'Fifth image description', 'img5.jpg', 'img1-5.jpg'),
        new Image('6', 'The Sixth image', 'Sixth image description', 'img6.jpg', 'img1-6.jpg'),
        new Image('7', 'The Seventh image', 'Seventh image description', 'img7.jpg', 'img7-1.jpg'),
        new Image('8', 'The Eighth image', 'Eighth image description', 'img8.jpg', 'img8-1.jpg'),
    ];

    getImages() {
        return this.images;
    }
}
