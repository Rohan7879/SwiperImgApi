import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Swiper } from 'swiper';
import { register } from 'swiper/element/bundle';
register();
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  mySwiper = new Swiper('.swiper-container', {
    loop: true,
    direction: 'vertical',
  });
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.data();
  }

  // images = ['https://unsplash.com/photos/random'];
  // images = [
  //   'https://images.unsplash.com/photo-1501594907352-04cda38ebc29',
  //   'https://images.unsplash.com/photo-1501594907352-04cda38ebc29',
  // ];
  photo: any = '';
  data() {
    let json = this.http
      .get('https://api.slingacademy.com/v1/sample-data/photos')
      .subscribe((res) => {
        this.photo = res;
        console.log(res);
      });

    // console.log(json);
    return json;
  }
}
