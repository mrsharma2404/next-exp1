module.exports = {
  apps: [
    {
      name: "thrillophilia-next-exp-1",
      script: "npm start",
      args: "start",
      env: {
        // NODE_ENV: 'staging'
      },
    },
  ],

  deploy: {
    staging: {
      user: "ubuntu",
      host: "az-staging-2-partners.thrillo.dev",
      ref: "origin/main",
      repo: "git@github.com:mrsharma2404/next-exp1.git",
      path: "/home/ubuntu/apps/next-exp1",
      "pre-deploy-local": "",
      "post-deploy":
        "source ~/.nvm/nvm.sh && nvm use 20.5.1 && npm install && npm run build && pm2 reload ecosystem.config.js --env staging --update-env",
      "pre-setup": "",
      ssh_options: ["ForwardAgent=yes"],
    },
  },
};
