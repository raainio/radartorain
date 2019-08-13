import {Pipe, PipeTransform} from '@angular/core';
import {EventNode, RainNode} from "../shared/fidj-storage.model";


@Pipe({name: 'isStopped'})
export class IsStopped implements PipeTransform {
    transform(rains: RainNode[]): RainNode[] {
        return rains.filter((rain) => (rain.status === 0));
    }
}

@Pipe({name: 'isInProgress'})
export class IsInProgressPipe implements PipeTransform {
    transform(rains: RainNode[]): RainNode[] {
        return rains.filter((rain) => (rain.status === 1 || rain.status === 2));
    }
}

@Pipe({name: 'isReady'})
export class IsReady implements PipeTransform {
    transform(rains: RainNode[]): RainNode[] {
        return rains.filter((rain) => (rain.status > 2));
    }
}

@Pipe({name: 'hasGoodQuality'})
export class HasGoodQuality implements PipeTransform {
    transform(rain: RainNode): RainNode {
        if (rain.quality > 50)
            return rain;
        return null;
    }
}

@Pipe({name: 'progressValue'})
export class ProgressValue implements PipeTransform {
    transform(rain: RainNode): number {
        const value = (rain.progressIngest + rain.progressComputing) / 2;
        console.log('progressValue:', rain.id, value);
        return value;
    }
}

@Pipe({name: 'progressBuffer'})
export class ProgressBuffer implements PipeTransform {
    transform(rain: RainNode): number {
        const value = 0.5;
        console.log('progressBuffer: ', rain.id, value);
        return value;
    }
}

// todo refactor module common code : PIPE
@Pipe({
    name: 'eventHaveNotBeenRed',
    pure: false
})
export class EventHaveNotBeenRed implements PipeTransform {
    transform(events: EventNode[]): EventNode[] {
        const haveNotBeenRed = events.filter((event) => (!event.red));
        console.log('pipe haveNotBeenRed:', haveNotBeenRed);
        return haveNotBeenRed;
    }
}
