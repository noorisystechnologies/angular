import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  query = '';
  users = [
    { "title": "Monsieur", "first": "Niklas", "last": "Philippe", "age": "20", "gender": "male", "email": "niklas.philippe@example.com" },
    { "title": "Mrs", "first": "Nicoline", "last": "Jensen", "age": "40", "gender": "female", "email": "nicoline.jensen@example.com" },
    { "title": "Miss", "first": "Lilly", "last": "Smith", "age": "34", "gender": "female", "email": "lily.smith@example.com" },
    { "title": "Mr", "first": "Julio", "last": "Ibanez", "age": "42", "gender": "male", "email": "julio.ibanez@example.com" },
    { "title": "Monsieur", "first": "Horst1", "last": "Bernard", "age": "56", "gender": "male", "email": "horst.bernard1@example.com" },
    { "title": "Monsieur", "first": "Horst2", "last": "Bernard", "age": "47", "gender": "male", "email": "horst.bernard2@example.com" },
    { "title": "Monsieur", "first": "Horst3", "last": "Bernard", "age": "15", "gender": "male", "email": "horst.bernar3d@example.com" },
    { "title": "Monsieur", "first": "Horst4", "last": "Bernard", "age": "69", "gender": "male", "email": "horst.bernard4@example.com" },
    { "title": "Monsieur", "first": "Horst5", "last": "Bernard", "age": "32", "gender": "male", "email": "horst.bernard5@example.com" },
    { "title": "Monsieur", "first": "Horst6", "last": "Bernard", "age": "25", "gender": "male", "email": "horst.bernard6@example.com" },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
