import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from "../data.service";
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit {
  @ViewChild('leadsDataTable') leadsDataTable;
  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.leadsDataTable.data, event.previousIndex, event.currentIndex);
  }

}
