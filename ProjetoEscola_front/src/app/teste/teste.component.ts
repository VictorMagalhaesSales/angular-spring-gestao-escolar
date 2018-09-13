import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss']
})
export class TesteComponent implements OnInit {

  cars: any[] = [
    {vin: "asdsd", year: "asd", brand: "asdasd", color:"asdas"},
    {vin: "asdsd", year: "asd", brand: "asdasd", color:"asdas"},
    {vin: "asd3sd", year: "asd", brand: "asdasd", color:"asdas"},
    {vin: "as3dsd", year: "asd", brand: "asdasd", color:"asdas"},
    {vin: "asd3sd", year: "asd", brand: "asdasd", color:"asdas"},
    {vin: "asdsd", year: "asd", brand: "asdasd", color:"asdas"},
    {vin: "5asd4sd", year: "asd", brand: "asdasd", color:"asdas"},
    {vin: "as6dsd", year: "asd", brand: "asdasd", color:"asdas"},
    {vin: "asd7sd", year: "asd", brand: "asdasd", color:"asdas"},
    {vin: "a8sdsd", year: "asd", brand: "asdasd", color:"asdas"},
    {vin: "asds9d", year: "asd", brand: "asdasd", color:"asdas"},
    {vin: "as0dsd", year: "asd", brand: "asdasd", color:"asdas"},
    {vin: "asd-sd", year: "asd", brand: "asdasd", color:"asdas"}
  ]

  cols: any[];

  constructor() { }

  ngOnInit() {

  }

}
