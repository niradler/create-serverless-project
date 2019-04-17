# Create Serverless Project

bootstrap new Serverless project.

## Usage

```
npm init serverless-project
# or
npx create-serverless-project 
```

## Template Info:

### Available Scripts:
- npm run start # start serverless offline 
- npm run deploy # deploy serverless functions 
- npm run deploy:one # deploy serverless function 
- npm run logs # stream function logs

### Usage:
- npm run start --stage dev
- npm run deploy -- --stage dev
- npm run deploy:one -- hello --stage dev
- npm run logs -- hello --stage dev