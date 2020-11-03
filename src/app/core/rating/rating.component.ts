import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
    selector: 'ms-rating',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
    @Input() rating: number;
    @Input() isReadonly: boolean;
    @Input() itemId: number;
    @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();

    inputName: string;

    constructor() {
    }

    ngOnInit(): void {
        this.inputName = this.itemId + '_rating';
    }

    onClick(rating: number): void {
        if (this.isReadonly === false) {
            this.rating = rating;
            this.ratingClick.emit({
                itemId: this.itemId,
                rating: rating
            });
        }
    }
}
