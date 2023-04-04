# Moshi

A video conferencing webapp in the works.

## Getting Started

**Requirements:**

NodeJS: https://nodejs.org/en

Firebase Account: https://firebase.google.com

GitHub Account: https://github.com

Git: https://git-scm.com

### Cloning the Project

- Install Git on your computer.
- Go to the project's GitHub page and click on the "Clone or download" button.
- Copy the URL that appears.
- Open your terminal or command prompt and navigate to the directory where you want to store the project.
- Run command:

```
git clone https://github.com/omineko/moshi.git
```

- Hit enter and wait for Git to download the project files.
- Once the cloning process is complete, you will have a local copy of the project that you can work on.

### Installing Dependencies

**On your terminal, run:**

```
npm install
```

### Setting up Firebase

**Install Firebase CLI:**

```
npm install -g firebase-tools
```

**Fire up the emulator suite**

To run the firebase emulators locally, run:

```
firebase emulators:start
```

**Connect the emulation suite to your config**

If the emulators started successfully, you should see this on your terminal:

```
┌─────────────────────────────────────────────────────────────┐
│ ✔  All emulators ready! It is now safe to connect your app. │
│ i  View Emulator UI at http://127.0.0.1:4000/               │
└─────────────────────────────────────────────────────────────┘

┌────────────────┬──────────────────────────────────┬─────────────────────────────────┐
│ Emulator       │ Host:Port                        │ View in Emulator UI             │
├────────────────┼──────────────────────────────────┼─────────────────────────────────┤
│ Authentication │ 127.0.0.1:9099                   │ http://127.0.0.1:4000/auth      │
├────────────────┼──────────────────────────────────┼─────────────────────────────────┤
│ Functions      │ Failed to initialize (see above) │                                 │
├────────────────┼──────────────────────────────────┼─────────────────────────────────┤
│ Firestore      │ 127.0.0.1:8080                   │ http://127.0.0.1:4000/firestore │
├────────────────┼──────────────────────────────────┼─────────────────────────────────┤
│ Database       │ 127.0.0.1:9000                   │ http://127.0.0.1:4000/database  │
├────────────────┼──────────────────────────────────┼─────────────────────────────────┤
│ Hosting        │ 127.0.0.1:5000                   │ n/a                             │
└────────────────┴──────────────────────────────────┴─────────────────────────────────┘
  Emulator Hub running at 127.0.0.1:4400
  Other reserved ports: 4500, 9150
```

Copy the **Host:Port** of the service you want to use and paste it on the connect[SERVICE_NAME]Emulator function

```
import { getAuth, connectAuthEmulator } from "firebase/auth";

const auth = getAuth();
connectAuthEmulator(auth, "http://127.0.0.1:9099");
```

Learn more about firebase emulator [here](https://firebase.google.com/docs/emulator-suite/)

<!-- **Set up Firebase config:**
- Create two files: .env and .firebaserc.
- Copy and paste the contents of .env.example and .firebaserc.example, respectively.
Fill in the necessary information in .env (you can find these details in your Firebase Console: Project Settings > General > Your Apps).
Place your project ID inside .firebaserc. -->

### Workflow

**Every time you start coding on this project, pull the recent changes from the GitHub repo:**

```
git pull
```

**Whether you implemented a feature or fixed a bug, commit the changes you have made with a meaningful commit message:**

```
git add .
git commit -m "added Login component"
```

**After your coding session, push your changes on the dev repo:**

```
git push origin dev
```

**If you think your code is ready to merge, create a pull request. Note that your code should pass all tests from GitHub Actions to be able to merge.**
