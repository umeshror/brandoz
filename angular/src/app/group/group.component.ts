import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Group} from "./group.model";
import {GroupService} from "./group.service";


@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  groups$: Observable<Group[]>;

  constructor(private groupService: GroupService) {
  }

  ngOnInit() {
    this.getGroups();
  }

  public getGroups() {
    this.groups$ = this.groupService.getGroups();
  }

}
