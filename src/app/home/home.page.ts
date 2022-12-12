import { Component } from '@angular/core';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private socialSharing: SocialSharing) {}

  shareViaEmail(){
    this.socialSharing.shareViaEmail('https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoidHIifQ%3D%3D%22%7D' , '' , ['melihyumusaker@gmail.com']).then(response => {
      console.log(response); // Eğer başarılı bir şekilde cevap gelirse onu konsola bas
    })
    .catch(e => {
      console.log(e); // Cevap gelmezse sorunu konsola bas
    });
  }

 

}
