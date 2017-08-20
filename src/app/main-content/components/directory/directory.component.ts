import { DirectoryService } from '../../services/directory.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'al-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss'],
  providers: [DirectoryService]
})
export class DirectoryComponent implements OnInit {

  constructor(private directory: DirectoryService) { }

  ngOnInit() {
  }

}
