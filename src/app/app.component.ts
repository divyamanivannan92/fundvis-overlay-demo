import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayComponent } from './components/overlay/overlay.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, OverlayComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fundvis-overlay-demo';
   showOverlay = false;
     drawerOpen = false;
      companyName = 'Amazon.com, Inc.';
      recordId = '1'

sectionData = {
    Tasks: {
      tags: [{ label: 'open', count: 0 }, { label: 'recurring', count: 0 }],
      items: [] // lazy loaded
    },
    Risks: {
      tags: [{ label: 'critical', count: 1 }],
      items: [
        { name: 'Risk A', status: 'Critical' },
         { name: 'Risk B', status: 'Medium' },
          { name: 'Risk C', status: 'Low' }
      ]
    },
    Assets: {
      tags: [],
      items: []
    },
    Incidents: {
      tags: [{ label: 'critical', count: 1 }],
      items: [
        { name: 'Incidents A', status: 'High Priority' },
        { name: 'Incidents B', status: 'Resolved' }
      ]
    },
     'Business Functions': {
      tags: [],
      items: [
        { name: 'BusinessfnsA', status: 'Open' },
        { name: 'BusinessfnsB', status: 'Resolved' }
      ]
    },
     Contracts: {
      tags: [{ label: 'open', count: 1 },{ label: 'Resolved', count: 1 }],
      items: [
     { name: 'Contract A', status: 'Open', filename: 'contract-a.pdf' },
  { name: 'Contract B', status: 'Resolved', filename: 'contract-b.pdf' }
  ]
    },
    
  };

   
  openOverlay() {
    this.showOverlay = true;
  }

  closeOverlay = () => {
    this.showOverlay = false;
  };

}
