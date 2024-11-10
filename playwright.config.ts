import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 240 * 1000,
  expect: {
    timeout: 15 * 1000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 0 : 2,
  workers: process.env.CI ? 1 : 1,
  reporter: [
    ['html'], 
  ],

  use: {
    trace: 'on',
    headless: false,
    video: 'on',
    screenshot: 'on',
    actionTimeout: 40000,
    
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices[''],
        viewport: {
          width: 1080,
          height: 720,
        },
        // video: {
        //   mode: 'on', // Capture video for all tests
        // },
      },
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
