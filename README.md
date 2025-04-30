# Eachseed Platform

Welcome to the Eachseed Platform! This guide will help you get started with the project, even if you're new to coding. We'll walk through everything step by step.

## 🚀 Getting Started

### 1. Install Prerequisites

Before you begin, you'll need to install these tools:

- **Node.js**: This is like the engine that runs our application
  - Download from [nodejs.org](https://nodejs.org/)
  - Choose the "LTS" (Long Term Support) version
  - Run the installer and follow the instructions

- **Git**: This helps us manage our code
  - Download from [git-scm.com](https://git-scm.com/)
  - Run the installer and follow the instructions

- **VS Code**: This is where we'll write our code
  - Download from [code.visualstudio.com](https://code.visualstudio.com/)
  - Run the installer and follow the instructions

### 2. Clone the Repository

Now, let's get the project code:

1. Open VS Code
2. Press `Ctrl + Shift + P` (Windows) or `Cmd + Shift + P` (Mac)
3. Type "Git: Clone" and press Enter
4. Paste this URL: `[Your Repository URL]`
5. Choose where to save the project on your computer
6. Click "Clone"

### 3. Install Dependencies

Dependencies are like tools our project needs to work:

1. Open VS Code's terminal (View → Terminal)
2. Make sure you're in the project folder
3. Type this command and press Enter:
   ```bash
   npm install
   ```
4. Wait for the installation to complete (it might take a few minutes)

### 4. Set Up Environment Variables

We need to create a special file to store our secret settings:

1. In VS Code, right-click in the project folder
2. Select "New File"
3. Name it `.env.local`
4. Add these lines to the file:
   ```
   MONGO_URI=your_mongodb_uri_here
   JWT_SECRET=your_jwt_secret_here
   ```

### 5. Get MongoDB URI

You'll need a MongoDB connection string:

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and create an account
2. Create a new cluster (the free tier is fine)
3. Click "Connect" on your cluster
4. Choose "Connect your application"
5. Copy the connection string
6. Replace `<password>` in the string with your actual password
7. Paste this string as your `MONGODB_URI` in the `.env.local` file

### 6. Create JWT Secret

The JWT secret is like a password for our authentication system:

1. Open a new terminal
2. Type this command and press Enter:
   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```
3. Copy the long string that appears
4. Paste it as your `JWT_SECRET` in the `.env.local` file

### 7. Run the Application

Now you're ready to start the application:

1. Make sure you're in the project folder in the terminal
2. Type this command and press Enter:
   ```bash
   npm run dev
   ```
3. Open your web browser
4. Go to [http://localhost:3000](http://localhost:3000)

🎉 Congratulations! You've successfully set up the Eachseed Platform!

## Need Help?

If you run into any problems:
- Check that all the prerequisites are installed correctly
- Make sure you've followed each step carefully
- Ask a teammate for help - we're all here to support each other!

Happy coding! 🚀
