import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { infoAPI } from 'src/app/models/infoAPI.model';
import { DataService } from '../../services/dataTableService/data.service';

const DATA: infoAPI[] = [
  {
    API: 'string',
    Description: 'string',
    Link: 'string',
    Category: 'string',
    Cors: 'string',
  },
];

@Component({
  selector: 'app-database-tabla',
  templateUrl: './database-tabla.component.html',
})
export class DatabaseTablaComponent {
  constructor(private _entradaServicio: DataService) {}

  displayedColumns: string[] = [
    'API',
    'Description',
    'Link',
    'Category',
    'Cors',
  ];
  dataSource = new MatTableDataSource<infoAPI>([]);

  ngAfterViewInit() {
    this.dataSource.paginator! = this.paginator;
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  listar() {
    this._entradaServicio.getEntradas().subscribe((resp) => {
      console.log(resp);
      if (resp.count > 0) {
        this.dataSource.data = resp.entries
      }
    });
  }
}
