import {FidjService} from 'fidj';


export class RadarNode {
    id: string;
    name: string;
    status: number;
    quality: number;
    values: Array<any>;
}

export class RainNode {
    id: string;
    name: string;
    status: number;
    quality: number;
    progressIngest: number;
    progressComputing: number;
    values: Array<any>;
}

export class PeopleNode {
    id: string;
    email: string;
    name: string;
    description: string;
}

export class EventNode {
    id: string;
    title: string;
    status: number;
    red: boolean;
    description: string;
    created: Date;
    modified: Date;
}

export class FidjStorageNode {

    public radars: RadarNode[] = [];
    public rains: RainNode[] = [];
    public team: PeopleNode[] = [];
    public events: EventNode[] = [];

    static getEmptyNode() {
        return new FidjStorageNode();
    }

    static getDemoNode() {
        let demoNode = new FidjStorageNode();
        demoNode.radars = [
            {
                id: 'dr1',
                name: 'demo radar A',
                status: 0,
                quality: 25,
                values: []
            },
            {
                id: 'dr2',
                name: 'demo radar B',
                status: 0,
                quality: 75,
                values: []
            },
            {
                id: 'dr3',
                name: 'demo radar C',
                status: 2,
                quality: 75,
                values: []
            },
            {
                id: 'dr4',
                name: 'demo radar D',
                status: 1,
                quality: 75,
                values: []
            }];
        demoNode.rains = [
            {
                id: 'dz1',
                name: 'Demo rain zone A',
                status: 0,
                quality: 75,
                progressIngest: 0,
                progressComputing: 0,
                values: []
            },
            {
                id: 'dz2',
                name: 'Demo rain zone B',
                status: 1,
                quality: 50,
                progressIngest: 0.5,
                progressComputing: 0,
                values: []
            },
            {
                id: 'dz3',
                name: 'Demo rain zone C',
                status: 2,
                quality: 75,
                progressIngest: 1,
                progressComputing: 0.5,
                values: []
            },
            {
                id: 'dz4',
                name: 'Demo rain zone D',
                status: 3,
                quality: 95,
                progressIngest: 1,
                progressComputing: 1,
                values: []
            }];
        demoNode.events = [{
            id: 'e2',
            title: 'Need support ?',
            status: 0,
            red: false,
            description: 'This area is dedicated to support you and your team. Support is made on Radar or Rain quality, or any feedback we can have about your production system. Our goal : improving your data.',
            created: new Date(),
            modified: new Date()
        }];
        demoNode.team = [{
            id: 'p1',
            email: 'demo@demo.com',
            name: 'demo guy',
            description: 'the demo guy'
        }];
        return demoNode;
    }
}

export class FidjStorage {

    public node: FidjStorageNode = FidjStorageNode.getEmptyNode();
    private fidjMetaResult: any = {data: {}};

    public set(fidjService: FidjService) {
        this.fidjMetaResult.data = this.node;
        fidjService.put(this.fidjMetaResult);
    }

    public async getRefreshedNode(fidjService: FidjService): Promise<FidjStorageNode> {

        const firstDemoData = () => {
            this.node = FidjStorageNode.getDemoNode();
            this.set(fidjService);
        };

        await fidjService.sync(firstDemoData);
        const fidjFindAllResults: any = await fidjService.findAll();

        if (fidjFindAllResults && fidjFindAllResults.length > 0) {
            if (fidjFindAllResults[0].data) {
                this.fidjMetaResult = fidjFindAllResults[0];
                this.node = this.fidjMetaResult.data;
            }
        }

        return this.node;
    }

}
