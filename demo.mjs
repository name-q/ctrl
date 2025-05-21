import { playVideo } from './dist/esm/index.js';

(async () => {
  try {
    await playVideo('./video.mp4', {
      fps: 12,
      width: 80,
    });
    console.log('播放完成');
  } catch (err) {
    console.error('播放失败:', err);
  }
})();