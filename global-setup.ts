import { test } from '@playwright/test';
import * as path from 'path';
import * as fs from 'fs';

// This hook will run after each test
test.afterEach(async ({}, testInfo) => {
  const videoPath = testInfo.attachments.find(attachment => attachment.name === 'video')?.path;
  if (videoPath) {
    // Define the custom directory where videos will be saved
    const destDir = path.join(__dirname, 'videos');

    // Create the directory if it doesn't exist
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    // Move the video file to the custom directory
    const destPath = path.join(destDir, path.basename(videoPath));
    fs.renameSync(videoPath, destPath);
  }
});
