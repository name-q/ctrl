import { decodeMP4ToYUVFrames } from "./demux";
import { playASCIIFrames } from "./player";

export async function playVideo(
  path: string,
  options?: { fps?: number; width?: number }
) {
  const frames = await decodeMP4ToYUVFrames(path);
  await playASCIIFrames(frames, {
    fps: options?.fps ?? 12,
    width: options?.width ?? 80,
  });
}
