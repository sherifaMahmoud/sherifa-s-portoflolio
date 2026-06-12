import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements AfterViewInit {

  @ViewChild('aboutSection')
  aboutSection!: ElementRef;

  isVisible = false;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.isVisible = true;
          observer.disconnect(); // بعد ما يظهر مرة ما نحتاجش نراقب تاني
        }
      },
      {
        // 0.15 أكثر موثوقية من 0.3 على الموبايل وعلى screens صغيرة
        threshold: 0.15,
        // يبدأ الأنيميشن شوية قبل ما العنصر يظهر كامل
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(this.aboutSection.nativeElement);
  }
}