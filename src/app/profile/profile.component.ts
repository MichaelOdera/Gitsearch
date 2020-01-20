import { Component, OnInit } from '@angular/core';
import { ProfileService} from '../services/profile.service';
import{ User } from '../user';
import { Repositories } from '../repositories';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:User;
  repos:any;
  username:string;

  constructor(private profileService:ProfileService) {
    
    this.profileService.getProfileRepos().subscribe(repos=>{
      this.repos = repos;
      console.log(repos)
    })
   }

   findProfile(){
    this.profileService.updateProfile(this.username);
    this.profileService.getProfileInfo();
    this.user = this.profileService.user;

    this.profileService.getProfileRepos().subscribe(repos=>{
      console.log(repos);
      this.repos = repos;
    })

   }

  ngOnInit() {
    this.profileService.getProfileInfo();
    this.user = this.profileService.user;
    
    
  }

}
