const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const path = require('path');

const inputDir = './src/videos';
const outputDir = './static/videos';

if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdirSync(inputDir).forEach(file => {
  if (path.extname(file).match(/\.(mp4|mov|avi)$/i)) {
    const inputPath = path.join(inputDir, file);
    const outputName = path.parse(file).name;
    const outputPathMP4 = path.join(outputDir, `${outputName}_encoded.mp4`);
    const outputPathWebM = path.join(outputDir, `${outputName}_encoded.webm`);

    // Encode to MP4
    ffmpeg(inputPath)
      .outputOptions([
        '-c:v libx264',
        '-crf 23',
        '-preset medium',
        '-vf scale=\'min(1920,iw)\':min\'(1080,ih)\':force_original_aspect_ratio=decrease',
        '-c:a aac',
        '-b:a 128k'
      ])
      .output(outputPathMP4)
      .on('end', () => console.log(`Finished processing ${outputPathMP4}`))
      .run();

    // Encode to WebM
    ffmpeg(inputPath)
      .outputOptions([
        '-c:v libvpx-vp9',
        '-crf 30',
        '-b:v 0',
        '-b:a 128k',
        '-vf scale=\'min(1920,iw)\':min\'(1080,ih)\':force_original_aspect_ratio=decrease'
      ])
      .output(outputPathWebM)
      .on('end', () => console.log(`Finished processing ${outputPathWebM}`))
      .run();
  }
});