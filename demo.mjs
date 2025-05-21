import { playVideo } from './dist/index.js';
import path from 'node:path';

const filePath = path.resolve('./video.mp4'); // 放你的视频路径

await playVideo(filePath, {
  fps: 10,
  width: 80,
});
