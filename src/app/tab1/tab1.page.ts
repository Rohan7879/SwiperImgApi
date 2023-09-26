import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { register } from 'swiper/element/bundle';

// register();
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  // constructor(private http: HttpClient) {}
  ngOnInit() {
    //   this.data();
  }

  // images = ['https://unsplash.com/photos/random'];
  // images = [
  //   'https://images.unsplash.com/photo-1501594907352-04cda38ebc29',
  //   'https://images.unsplash.com/photo-1501594907352-04cda38ebc29',
  // ];
  // photo: any = '';
  // data() {
  //   let json = this.http
  //     .get('https://api.slingacademy.com/v1/sample-data/photos')
  //     .subscribe((res) => {
  //       this.photo = res;
  //       console.log(res);
  //     });

  //   // console.log(json);
  //   return json;
  // }
}
