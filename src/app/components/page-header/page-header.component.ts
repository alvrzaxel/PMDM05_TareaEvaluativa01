import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-header',
  standalone: false,
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent  implements OnInit {

  // Se le asignará un valor al crear el componente con el selector "app-page-header"
  @Input() titulo: string = "";

  constructor() { }

  ngOnInit() {}

}
