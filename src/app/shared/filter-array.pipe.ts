import { Pipe } from '@angular/core';
import { PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterArray',
    pure: false
})
export class FilterArrayPipe implements PipeTransform {
    transform(value: any, filterString: string, propName: string) {
        if (value.length === 0 || filterString === '' || filterString === '*') {
            return value
        }

        const resultArray = []
        for (const item of value) {
            if (item[propName].includes(filterString)) {
                resultArray.push(item);
            }
        }
        return resultArray;
    }
}