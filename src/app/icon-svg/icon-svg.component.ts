import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component ({
  selector: 'app-svg-component',
  templateUrl: './icon-svg.component.html',
  styleUrls: ['./icon-svg.component.css'],
})
export class IconSvgComponent {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'thumbs-up',
        sanitizer.bypassSecurityTrustResourceUrl('../../assets/img/delete.svg'));
  }
}
