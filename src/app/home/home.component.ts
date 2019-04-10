import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment';
import { MovieModel, MoviesResponse } from './movies'

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})

export class HomeComponent implements OnInit {
  searchForm: FormGroup;
  movies: Array<MovieModel>;
  info: any;

  constructor(private fb: FormBuilder,
    private http: HttpClient) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      title: new FormControl('', Validators.required),
      plot: new FormControl(false),
    })
  }

  search() {
    console.log(this.searchForm.value)
    let plot = 'full';
    let url = `${env.omdbApiUrl}${this.searchForm.value.title}&plot=${plot}&apikey=${env.omdbApiApikey}`;
    return this.http.get(url)
      .subscribe((res: MoviesResponse) => {
        if (res.Response == 'True') {
          this.movies = res.Search;
          this.info = res.totalResults
        }
      })
  }
}
