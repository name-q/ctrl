declare module "h264decoder" {
  export class H264Decoder {
    constructor();

    decode(nalu: Uint8Array): void;

    flush(): void;

    onPictureDecoded?: (
      buffer: Uint8Array,
      width: number,
      height: number
    ) => void;
  }
}
