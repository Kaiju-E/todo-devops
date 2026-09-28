# Next.js ToDo DevOps Application

A simple ToDo application prepared for the DevOps Application Development Task Sheet.

## Features

- Add a task
- View tasks
- Mark a task as completed
- Delete a task
- No database required
- Tasks are stored temporarily in React state
- Simple responsive UI

## 1. Requirements

Install:

- Node.js
- npm
- Git
- Visual Studio Code (recommended)

Check your installation:

```bash
node -v
npm -v
git --version
```

## 2. Open the project

Open the `todo-devops` folder in VS Code.

Then open the VS Code terminal.

## 3. Install dependencies

```bash
npm install
```

## 4. Run the application

```bash
npm run dev
```

Open this address in your browser:

http://localhost:3000

To stop the server, press:

```text
Ctrl + C
```

## 5. Git setup

If this folder is not already a Git repository:

```bash
git init
git add .
git commit -m "Initial Next.js ToDo project"
```

Create your GitHub repository, then connect it:

```bash
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your actual GitHub repository URL.

## 6. Required DevOps branches

Create the development branch:

```bash
git checkout -b develop
git push -u origin develop
```

Create feature branches from `develop`:

```bash
git checkout develop
git checkout -b feature/add-task
```

After changes:

```bash
git add .
git commit -m "Add task feature"
git push -u origin feature/add-task
```

Merge the feature into develop:

```bash
git checkout develop
git merge feature/add-task
git push origin develop
```

Repeat the same workflow for:

```text
feature/complete-task
feature/delete-task
```

Create the release branch:

```bash
git checkout develop
git checkout -b release/v1.0
git push -u origin release/v1.0
```

After staging testing, merge into main:

```bash
git checkout main
git merge release/v1.0
git push origin main
```

## 7. Environment mapping

| Environment | Branch |
|---|---|
| Development | develop |
| Staging | release/v1.0 |
| Production | main |

For the activity, connect these branches to the corresponding Vercel deployments.

## 8. Suggested screenshots

Take screenshots of:

1. `npm run dev` running in the terminal
2. ToDo application running at localhost
3. GitHub repository
4. GitHub branch list
5. Feature branch
6. Add Task working
7. Feature merged into develop
8. Development Vercel deployment
9. `release/v1.0` branch
10. Staging deployment
11. Staging testing
12. Release merged into main
13. Production deployment
14. Development vs Production version difference

## 9. Important note

This starter project already contains the application functionality. For the DevOps activity, create and use the required Git branches and make meaningful commits so you can demonstrate the development → staging → production workflow.
