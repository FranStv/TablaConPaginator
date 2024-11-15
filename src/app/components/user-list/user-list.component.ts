import {AfterViewInit, Component, ViewChild,OnInit} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { UserService } from '../../services/user.service';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor,MatTableModule, MatPaginatorModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit, AfterViewInit{
users:any[]=[];
dataSource: MatTableDataSource<any>;
displayedColumns: string[] = ['id', 'name', 'email', 'role'];
@ViewChild(MatPaginator) paginator!: MatPaginator;
constructor(private userService:UserService){
  this.dataSource = new MatTableDataSource(this.users);
}
  ngOnInit(): void {
    this.userService.getUsers().subscribe( data =>{
      this.users = data;
      this.dataSource.data=this.users;
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
