//import { CursorError } from "@angular/compiler/src/ml_parser/lexer";
import { Component, OnInit } from "@angular/core";
import { Course } from './course'
import { CourseService } from "./course.service";

@Component({
    //selector: 'app-course-list', está sendo feito por rota agora

    templateUrl: './course-list.component.html'
})




export class CourseListComponent implements OnInit{

    filteredCourses: Course[] = [];
    
    _courses: Course[] = [];
    
    _filterBy: string;

    //esse contrutor vai la no "star.component.css" e cria, depois colocar no ngOnInit
    constructor(private courseServise: CourseService) {

        }
  
      ngOnInit(): void{
              
              //aqui somplesmente seta sentro do vetor couses o os coursos
              this._courses = this.courseServise.retrivrAll();
              this.filteredCourses = this._courses;        
      }

      set filter(value: string){
          this._filterBy = value;

          this.filteredCourses = this._courses.filter((course: Course) => course.name.toLowerCase().indexOf(this._filterBy.toLowerCase()) > -1);
      }
      get filter(){
          return this._filterBy;
      }
    
}


    
                    /*  this.courses = [
            {
                id: 1,
                name: 'Angualr',
                imageUrl: '/assets/images/forms.png',
                price: 99.99,
                code: 'XPS-8796',
                duration: 120,
                rating: 5.0,
                releaseDate: 'Decmber, 2, 2019',
                options: ''
            },
            
            {
                id: 2,
                name: 'Cruso em HTTP',
                imageUrl: '/assets/images/http.png',
                price: 5489.99,
                code: 'LDS-7878',
                duration: 80,
                rating: 3.4, 
                releaseDate: 'Janary, 20, 2020',
                options: ''

            },
            {
                id: 3,
                name: 'Router ',
                imageUrl: '/assets/images/router.png',
                price: 9.99,
                code: 'XPO-8080',
                duration: 88,
                rating: 4.4, 
                releaseDate: 'Ocber, 7, 2009',
                options: ''

            }
        ]
        */