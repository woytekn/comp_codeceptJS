export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost',
      show: true,
      browser: 'chromium',
      waitForNavigation: 'networkidle0',
    },
  },
  include: {
    I: './steps_file',
    loginPage: "./pages/Login.ts"
  },
  name: 'comp_codeceptJS',
  translation: 'pl-PL',
};