import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { User } from '../user';
import { Repositories} from '../repositories';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  username:string;
  user:User;
  repositories:Repositories;
  repos:any;

  reposits:any;

  constructor(private http:HttpClient) { 
    console.log("service is ready");
    this.user = new User("","","","","",0,0,0,0)
    this.username = "MichaelOdera";
  }


  //Getting a user using a promise
  getProfileInfo(){
    interface ApiResponse{
      login:string;
      followers:number;
      following:number;
      name:string;
      repos:string;
      public_repos:number;
      avatar_url:string;
      public_gists:number;
      html_url:string;
    }
    let promise = new Promise<void>((resolve, reject)=>{
      return this.http.get<ApiResponse>(environment.apiUrl + this.username ).toPromise().then(response=>{
      this.user.login = response.login
      this.user.name = response.name
      this.user.followers = response.followers
      this.user.repos = response.repos
      this.user.avatar_url = response.avatar_url
      this.user.following = response.following
      this.user.public_gists = response.public_gists
      this.user.public_repos = response.public_repos
      this.user.html_url = response.html_url

      resolve()
      },
      error=>{
        this.user.login = "Nothing found";
        this.user.name = "Nothing found";
        this.user.followers = 0;
        this.user.repos = "nothing found";
        this.user.avatar_url = "Nothing found";
        this.user.following = 0;
        this.user.public_gists = 0;
        this.user.public_repos = 0;
        this.user.html_url = "nothing found";

        reject(error)

      })
    })
    return promise 
  }

  //Getting repositories using a promise on call back
  getProfileRepos(){
    return this.http.get(environment.apiUrl + this.username + "/repos").map(response=>response)
    
    }

  getRepositories(){
    interface ApiResponse{
      name:string;
      description:string;
    }
    let promise = new Promise((resolve ,reject)=>{
      return this.http.get<ApiResponse>(environment.apiUrl + this.username+"/repos").toPromise().then(response=>{
        console.log(response)
        console.log("getting repos");
        response
        // this.repositories.name = response.name
        // this.repositories.description = response.description
        

        resolve(response)
      },
      error=>{
        this.repositories.name = "No name found"
        this.repositories.description = "No description available"

        reject(error)
      })
    })
    return promise
  }
  


  updateProfile(username:string){
    this.username= username;
  }
}
