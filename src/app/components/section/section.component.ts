import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from '../list-item/list-item.component';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [CommonModule, ListItemComponent],
  templateUrl: './section.component.html'
})
export class SectionComponent {
  @Input() title: string = '';
  @Input() icon?: string;
  @Input() tags: { label: string; count: number }[] = [];
  @Input() items: any[] = [];
  @Input() columns: any[] = [];
  @Input() expanded: boolean = false;
  

  @Output() toggle = new EventEmitter<void>();
}
