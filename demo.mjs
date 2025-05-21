global = self;
import { playVideo } from './dist/bundle.esm.js';

await playVideo('./video.mp4', {
  fps: 12,     // 可选：帧率
  width: 80    // 可选：ASCII 渲染宽度（字符数）
});
