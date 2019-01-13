import { Pipe, PipeTransform } from "@angular/core";
import linkifySrc from 'linkifyjs/string';

@Pipe({name: 'linkifysrc'})

export class LinkifysrcPipe implements PipeTransform {
  transform(src: string): string {
    return src ? linkifySrc(src, {target: '_system'}) : src;
  }
}