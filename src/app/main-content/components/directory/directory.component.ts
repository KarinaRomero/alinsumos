import { DirectoryService } from '../../services/directory.service';
import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'al-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss'],
  providers: [DirectoryService]
})
export class DirectoryComponent implements OnInit {

  constructor(
    private directory: DirectoryService,
    @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.document.body.scrollTop = 0;
  }

}
