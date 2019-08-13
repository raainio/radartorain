import {Injectable} from '@angular/core';
import {Storage} from './storage.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {FidjService} from 'fidj';
import {FidjStorage, FidjStorageNode} from './fidj-storage.model';
import {EndpointInterface} from "fidj/sdk/interfaces";

@Injectable()
export class Profile {

    private email: string;
    private roles: Array<string>;
    private endpoint: EndpointInterface = null;
    private nodeData: FidjStorageNode;
    private fidjStorage: FidjStorage;

    public readyForSync: BehaviorSubject<boolean>;

    constructor(private storage: Storage,
                private fidjService: FidjService) {
        console.log('Profile service');
        this.email = this.storage.get('email') || null;
        this.readyForSync = new BehaviorSubject<boolean>(false);
        this.roles = [];
        this.fidjStorage = new FidjStorage();
    }

    async refreshProfile() : Promise<FidjStorageNode> {
        this.nodeData = await this.fidjStorage.getRefreshedNode(this.fidjService);
        this.setRoles(this.fidjService.getRoles());
        await this.refreshEndpoint();
        return this.nodeData;
    }

    getEmail() {
        return this.email;
    }


    setEmail(email: string) {
        this.email = email;
        this.storage.set('email', this.email);
    }

    logout() {
        this.storage.remove('email');
    }

    isLoggedIn() {
        return this.fidjService.isLoggedIn();
    }

    isReady(): Observable<boolean> {
        return this.readyForSync.asObservable();
    }

    getRoles(): Array<string> {
        return this.roles;
    }

    private setRoles(roles: Array<string>): void {
        this.roles = roles;
    }

    getData(): FidjStorageNode {
        return this.nodeData;
    }

    // todo refactor refreshedEndpoint (name ? cache ?)
    private refreshEndpoint() {
        // this.endpoint = null;
        let endpoint = null;
        const endpoints: EndpointInterface[] = this.fidjService.getEndpoints();
        endpoints.forEach(ep => {
            if (ep.key === 'bot-api' && !ep.blocked) {
                endpoint = ep;
            }
        });

        if (endpoint && this.endpoint !== endpoint) {
            this.endpoint = endpoint;
        }
    }

    storeAll() {
        this.fidjStorage.set(this.fidjService);
    }
}

