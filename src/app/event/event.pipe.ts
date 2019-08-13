import {Pipe, PipeTransform} from '@angular/core';
import {EventNode, RainNode} from "../shared/fidj-storage.model";

@Pipe({
    name: 'haveBeenRed',
    pure: false
})
export class HaveBeenRed implements PipeTransform {
    transform(events: EventNode[]): EventNode[] {
        const haveBeenRed = events.filter((event) => (event.red));
        console.log('pipe haveBeenRed:', haveBeenRed);
        return haveBeenRed;
    }
}

@Pipe({
    name: 'haveNotBeenRed',
    pure: false
})
export class HaveNotBeenRed implements PipeTransform {
    transform(events: EventNode[]): EventNode[] {
        const haveNotBeenRed = events.filter((event) => (!event.red));
        console.log('pipe haveNotBeenRed:', haveNotBeenRed);
        return haveNotBeenRed;
    }
}

@Pipe({
    name: 'hasBeenRed',
    pure: false
})
export class HasBeenRed implements PipeTransform {
    transform(event: EventNode): boolean {
        return event.red;
    }
}
