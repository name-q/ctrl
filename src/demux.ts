import * as fs from "fs";
import { MP4Demuxer } from "demuxer";
import { H264Decoder } from "h264decoder";

export interface YUVFrame {
  buffer: Uint8Array;
  width: number;
  height: number;
}

export async function decodeMP4ToYUVFrames(path: string): Promise<YUVFrame[]> {
  const buffer = fs.readFileSync(path);
  const demuxer = new MP4Demuxer();
  const { streams } = demuxer.demux(new Uint8Array(buffer));
  const video = streams.find((s) => s.codec === "avc1");
  if (!video) throw new Error("No video track found");

  const decoder = new H264Decoder();
  const frames: YUVFrame[] = [];

  decoder.onPictureDecoded = (buf, width, height) => {
    frames.push({ buffer: buf, width, height });
  };

  for (const frame of video.frames) {
    const chunks = splitNALUnits(frame.data);
    chunks.forEach((nal) => decoder.decode(nal));
  }

  decoder.flush();
  return frames;
}

function splitNALUnits(data: Uint8Array): Uint8Array[] {
  const result: Uint8Array[] = [];
  let last = 0;
  for (let i = 4; i < data.length - 4; i++) {
    if (
      data[i] === 0 &&
      data[i + 1] === 0 &&
      ((data[i + 2] === 0 && data[i + 3] === 1) || data[i + 2] === 1)
    ) {
      result.push(data.subarray(last, i));
      last = i;
    }
  }
  result.push(data.subarray(last));
  return result;
}
