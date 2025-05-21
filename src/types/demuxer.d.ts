declare module "demuxer" {
  import { EventEmitter } from "events";

  export class MP4Demux extends EventEmitter {
    demux(buffer: Uint8Array): { streams: any[] };
    on(event: string, listener: (...args: any[]) => void): this;
  }

  export const Events: {
    DEMUX_DATA: string;
    DONE: string;
  };

  export class TSDemux extends EventEmitter {}
  export class FLVDemux extends EventEmitter {}
}
