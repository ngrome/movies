import { Component } from '@angular/core';
import { OfflineService } from './shared/services/offline.service';
import { UpdateService } from './shared/services/update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private appUpdate: UpdateService, private appNetwork: OfflineService){

  }

  onInit(){

  }

}
