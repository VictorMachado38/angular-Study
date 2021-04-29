import { Component, OnInit } from "@angular/core";
import { Course } from './course'

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})



export class CourseListComponent implements OnInit{

    courses: Course[] = [];

    ngOnInit(): void{
        this.courses = [
            {
                id: 1,
                name: 'Angualr',
                imageUrl: '',
                price: 99.99,
                code: 'XPS-8796',
                duration: 120,
                rating: 5.4,
                releaseDate: 'Decmber, 2, 2019'
            },
            
            {
                id: 2,
                name: 'Angualr 2',
                imageUrl: '',
                price: 5489.99,
                code: 'LDS-7878',
                duration: 80,
                rating: 9.4, 
                releaseDate: 'Janary, 20, 2020'

            },
            {
                id: 3,
                name: 'João',
                imageUrl: '',
                price: 9.99,
                code: 'XPO-8080',
                duration: 88,
                rating: 7.4, 
                releaseDate: 'Ocber, 7, 2009'

            }
        ]
    }
}

