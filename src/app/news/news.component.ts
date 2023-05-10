import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
 newsAPIURL = "https://newsapi.org/v2/top-headlines?country=us$category=business&apiKey=a4a7812023414335a4aa9a6dbec1408c"

 constructor(private httpClient: HttpClient) {
    this.httpClient.get(this.newsAPIURL).subscribe(
      response=>{
        console.log("RESPONSE");
      }
    )
  }

}
