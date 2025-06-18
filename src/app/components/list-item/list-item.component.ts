import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ColumnDefinition {
  key: string;
  label: string;
  type?: 'text' | 'tag' | 'button';
  tagColors?: { [key: string]: string };
  buttonText?: string;
}

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
  @Input() items: any[] = [];

  @Input() columns: ColumnDefinition[] = [];
}
