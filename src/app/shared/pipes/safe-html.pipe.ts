import { inject, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml',
  standalone: true
})
export class SafeHtmlPipe implements PipeTransform {

  private readonly sanitizer = inject(DomSanitizer)
  

  transform(html: string | undefined): SafeHtml {

    html = html ?? ""
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

}
