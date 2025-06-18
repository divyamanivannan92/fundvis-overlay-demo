import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayComponent } from './components/overlay/overlay.component';
import { OverlayDataService } from './services/fundvis-overlay-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, OverlayComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'fundvis-overlay-demo';
  showOverlay = false;
  drawerOpen = false;
  companyName = 'Amazon.com, Inc.';
  recordId = '1';
    
  sectionData: Record<string, { tags?: any[]; items?: any[] }> = {};

  constructor(private overlayDataService: OverlayDataService) {}

  ngOnInit() {
    this.fetchSectionData();
  }

  //Fetch method to get data for the parent component. 
  fetchSectionData() {
    this.overlayDataService.getSectionData().subscribe(data => {
      this.sectionData = data;
    });
  }
  //Method to open the overlay on button click
  openOverlay() {
    this.showOverlay = true;
  }

 //Method to close the overlay on button click
  closeOverlay = () => {
    this.showOverlay = false;
  };
}
