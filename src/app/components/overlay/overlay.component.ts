import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '../section/section.component';
import { OVERLAY_SECTIONS } from '../../config/fundvis-section.config';
import { OverlayDataService } from '../../services/fundvis-overlay-service';

@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [CommonModule, SectionComponent],
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit {
  
  constructor(private overlayDataService: OverlayDataService) {}
  
  @Output() close = new EventEmitter<void>();
  @Input() companyName: string = '';
  @Input() recordId: number | string = '';
  @Input() sectionData: Record<string, {
    tags?: { label: string; count: number }[];
    items?: any[];
  }> = {};

  open = false;
  expandedSection: string | null = null;

  sections: {
    title: string;
    icon: string;
    lazy?: boolean;
    columns: any[];
    tagColors?: { [key: string]: string };
    tags: { label: string; count: number }[];
    items?: any[];
  }[] = OVERLAY_SECTIONS.map(section => ({
    ...section,
    tags: [],
    items: section.lazy ? undefined : []
  }));

  

  ngOnInit() {
    this.sections = this.sections.map(section => ({
      ...section,
      tags: this.sectionData[section.title]?.tags || [],
      items: section.lazy ? undefined : this.sectionData[section.title]?.items || []
    }));

    setTimeout(() => (this.open = true), 0);
  }

  toggleSection(title: string) {
    const section = this.sections.find(s => s.title === title);
    if (!section) return;

    if (section.lazy && !section.items) {
       this.overlayDataService.getSectionByTitle(title).subscribe(
  (data: { items?: any[]; tags?: { label: string; count: number }[] }) => {
    section.items = data.items || [];
    section.tags = data.tags || [];
  }
);
    }

    this.expandedSection = this.expandedSection === title ? null : title;
  }

  handleClose() {
    this.open = false;
    setTimeout(() => this.close.emit(), 300); // Allow closing animation
  }
}
