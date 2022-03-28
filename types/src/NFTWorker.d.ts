export default class NFTWorker {
    private worker;
    private oef;
    private markerURL;
    private _processing;
    private vw;
    private vh;
    private target;
    private uuid;
    private name;
    protected ready: boolean;
    constructor(markerURL: string, w: number, h: number, uuid: string, name: string);
    initialize(cameraURL: string, renderUpdate: () => void, trackUpdate: () => void): Promise<boolean>;
    process(imagedata: ImageData, frame: number): void;
    protected load(cameraURL: string, renderUpdate: () => void, trackUpdate: () => void): Promise<boolean>;
    found(msg: any): void;
    set Oef(oef: boolean);
    isReady(): boolean;
    getUuid(): string;
    getName(): string;
    getMarkerUrl(): string;
    getEventTarget(): EventTarget;
    destroy(): void;
    static stopNFT(): void;
}
