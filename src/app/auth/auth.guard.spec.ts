import {TestBed, async, inject} from '@angular/core/testing';

import {AuthGuard} from './auth.guard';
import {FidjService} from "fidj";

describe('AuthGuard', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AuthGuard,
                FidjService]
        });
    });

    it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
        expect(guard).toBeTruthy();
    }));

});
