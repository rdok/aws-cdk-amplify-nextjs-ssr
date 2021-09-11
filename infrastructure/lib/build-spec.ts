export default {
  version: '1.0',
  frontend: {
    phases: {
      preBuild: {
        commands: ['yarn']
      },
      build: {
        commands: ['yarn build']
      }
    },
    artifacts: {
      baseDirectory: '.next',
      files: ['**/*']
    },
    cache: {
      paths: 'node_modules/**/*',
    }
  }
};
