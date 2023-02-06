import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-bots',
  templateUrl: './bots.component.html',
  styleUrls: ['./bots.component.css']
})
export class BotsComponent implements OnInit {
  public bots: Bot[] = [];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Bot[]>(baseUrl + 'bots').subscribe(result => {
      this.bots = result;
    }, error => console.error(error));
  }

  ngOnInit(): void {
  }

}

interface Bot {
  user: string;
  name: string;
  created: string;
  elo: number;
}
