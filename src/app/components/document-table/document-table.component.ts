import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface Protocol {
  id: number;
  sponsor: string;
  studyName: string;
  protocolVersion: string;
  protocolDate: Date;
  user: string;
  uploadedDate: Date;
  status: string;
}

const protocolData: Protocol[] = [
  {
    id: 1,
    sponsor: 'GenericPharma Inc',
    studyName: 'ABC-123',
    protocolVersion: '2.0',
    protocolDate: new Date(),
    user: 'Deborah Coleman',
    uploadedDate: new Date(),
    status: 'In Progress'
  },
  {
    id: 2,
    sponsor: 'ABCPharma Inc',
    studyName: 'BB7-123',
    protocolVersion: '3.0',
    protocolDate: new Date('05/12/2016'),
    user: 'Joe Brown',
    uploadedDate: new Date('09/13/2018'),
    status: 'Downloaded'
  },
  {
    id: 3,
    sponsor: 'TTZPharma Inc',
    studyName: 'PQR7-123',
    protocolVersion: '3.0',
    protocolDate: new Date('08/12/2017'),
    user: 'Cathy Woods',
    uploadedDate: new Date('11/13/2017'),
    status: 'Ready for Review'
  },
  {
    id: 4,
    sponsor: 'TOZPharma Inc',
    studyName: 'FFR7-123',
    protocolVersion: '3.0',
    protocolDate: new Date('01/12/2019'),
    user: 'Cathy Woods',
    uploadedDate: new Date('02/23/2019'),
    status: 'Ready for Review'
  }
];

/**
 * @title Table with sorting
 */
@Component({
  selector: 'app-document-table',
  styleUrls: ['document-table.component.scss'],
  templateUrl: 'document-table.component.html'
})
export class DocumentTableComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = [
    'sponsor',
    'studyName',
    'protocolVersion',
    'protocolDate',
    'user',
    'uploadedDate',
    'status'
  ];

  dataSource = new MatTableDataSource(protocolData);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
}
