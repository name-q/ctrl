import { YUVFrame } from "./demux";
import { renderYUVToASCII } from "./ascii";

export async function playASCIIFrames(
  frames: YUVFrame[],
  opts: { fps: number; width: number }
) {
  const delay = 1000 / opts.fps;

  for (const frame of frames) {
    const ascii = renderYUVToASCII(
      frame.buffer,
      frame.width,
      frame.height,
      opts.width
    );
    process.stdout.write("\x1Bc"); // 清屏
    console.log(ascii);
    await new Promise((r) => setTimeout(r, delay));
  }
}
