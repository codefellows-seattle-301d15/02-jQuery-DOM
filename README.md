![CF](https://i.imgur.com/7v5ASc8.png)  Lab 02: jQuery and the DOM
=======
[![Build Status](https://travis-ci.org/codefellows-seattle-301d4/02-jQuery-and-the-DOM.svg?branch=master)](https://travis-ci.org/codefellows-seattle-301d4/02-jQuery-and-the-DOM)  [![GitHub issues](https://img.shields.io/badge/Issues%3F-Ask%20for%20Help!-orange.svg)](https://github.com/codefellows/seattle-301d7/issues/new) 

Work with the provided starter code to add structure and functionality a basic Blog web site.

The code has some unfinished features. Your help is needed to complete it!

Search through the code for:

 `// TODO: ...`

 comments, where features should be. Replace the comments and any related pseudo-code with real, working code.

Work in pairs. Take turns as "driver" and "navigator".

## Getting started with pair programming

Take a moment to shake hands and introduce yourselves.

You and your pair will have different experience levels, which is normal. You'll have opportunities to both teach and learn from your pair. Keep an open mind, and always be kind.

The workflow may take a little getting used to if you haven't done pairing before, so give yourself time to work through any git issues (aka: "gituations") that arise.

## Setup your repo

Here is the recommended workflow:

1. Driver: fork this repository to your own account.
1. Your **forked repo** on GitHub will be your "origin" repo. Clone YOUR FORK to your local development environment:
1. If you haven't done so yet, create a directory named "301" - `mkdir 301/` (This will be your parent 301 directory and set you up for organizational success!)
1. `cd 301/`
1. `mkdir driver` to house the pair assignment repos where you start out as the driver.
1. `cd driver`
1. `git clone` this repo.
1. `cd` into this repo.
1. Immediately `git checkout -b` driver-name-navigator-name (ex: git checkout -b rick-brian).
1. `cp -r starter-code/ submissions/`driver-name-navigator-name (ex: cp -r starter-code/ submissions/rick-brian).
 - The command above copies the starter-code directory, names it after you and your partner's names, and places it in the submissions folder, which is where you will write code. **No changes should be made to the original starter code.**
1. `git add submissions/`driver-name-navigator name (ex: git add submissions/rick-brian).
1. `git commit -m 'add initial copy of starter-code'`
1. `cd submissions/`driver-name-navigator-name (ex: cd submissions/rick-brian).

## Write code together!

Find those `TODO` items in the code, and tackle one of them.

1. Driver: In your terminal, ensure that:
   - you are on a branch with you and your partner's namesake.
   - you are currently within the directory also with you and your partner's namesake in the `submissions` folder.

1. Type `atom .` to open this folder as a project in Atom.
1. Use the Atom "Find in Project" (command shift "f" if on a Mac) to locate all the TODO items.
1. Work through one or two TODO items (or one hour, whichever arrives first), testing your code as you go, until you are happy with how it's working.
1. In your terminal type `git status` to view the files that you have changed. You should only see the files that you have worked on.
1. Type `git add file1 file2` where file1, file2, etc. are the files that you have changed.
1. Type `git status` to view the files that have been added to your commit. You should only see the files that you worked on.
1. Type `git diff --staged` to view the differences between the previous version and the staged version of your file.
1. Type `git commit -m "some meaningful message"` where Some meaningful message is a message that explains your commit.
1. Type `git status` to make sure there is nothing to commit.
1. Type `git push origin your-name-partner-name` to push this branch to your forked repo on GitHub.
2. On GitHub, Add your navigator as a collaborator (go to settings -> collaborators).
3. Slack your partner the repo link for them to clone down.

## Switch roles

1. Navigator (AKA new Driver): You can now clone the driver's fork, to your own local dev environment. If you haven't already:
2. `mkdir 301/` that will be the parent directory for your own forked repo
3. `cd 301/`
4. `mkdir navigator` within this main "301" directory - **not your class repo directory** - this will now contain your partner's repo, and future partner repos when you initially start out as navigator and later switch as a driver). Since you are now a collaborator, you can `pull` and `push` changes to and from `orgin`.

The new driver (original navigator):
1. `git clone` the repo your patner Slacked you into your navigator folder.
2. `git fetch origin` branch-name
2. Now open the code in Atom. It's your turn to have the hands on the keyboard!

## Submit your assignment

When you are finished with your work (or if time runs out), then submit your work. To do this, you'll create a "Pull Request" (aka: "PR") to the upstream repo with your changes, and submit that PR link in Canvas.

1. Ensure that all your local changes are committed, and pushed to your `origin` repo.
2. Visit the origin repo on github.com.
1. Create a new PR.
1. Carefully review the PR to ensure the branches look correct.
1. Write a good descriptive summary of your changes:
  - Be sure to include how much time you spent on it, and who you worked with.
  - Briefly reflect on and summarize your process.
1. When you create the PR, it will have a unique URL. Copy this link, and paste it into the assignment submission form in Canvas. Both the driver and the navigator will submit the same PR link.
