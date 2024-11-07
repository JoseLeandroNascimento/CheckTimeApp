import { TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeHtmlPipe } from './safe-html.pipe';

describe('SafeHtmlPipe', () => {

  let pipe: SafeHtmlPipe

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DomSanitizer,
        SafeHtmlPipe
      ]
    })

    pipe = TestBed.inject(SafeHtmlPipe)
    
  })

  it('create an instance', () => {
    
    expect(pipe).toBeTruthy();
  });

});
