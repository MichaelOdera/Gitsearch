import { Component, OnInit } from '@angular/core';
import { Repositories } from '../repositories';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  repos:any;
  name:any;

  constructor(private profileService:ProfileService) {
    this.profileService = profileService;
   }

  getRepo(){
    

  }



  ngOnInit() {
    this.profileService.getRepositories().then(res=>{
      this.repos = res;
      console.log(this.repos)
    });
    console.log(this.profileService.getRepositories())
    // this.repos = this.profileService.repos;
    // console.log(this.repos)
  }

}
