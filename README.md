<!-- README.md -->

AndTheTemplateOfDoom
================================================================================

AndTheTemplateOfDoom is a git and GitHub repo template, which generates skeleton files for new projects.

The skeleton files are:

- A `README.md` file for documentation
- An extensive `.gitignore` file
- An `.editorconfig` file
- An MIT `LICENSE`
- A `humans.txt` file for crediting contributors
- A `robots.txt` file for giving site instructions to web robots
- An `SMSP.md` file to layout your project's user stories, MVP, specifications, and pseudocode

## Contents

- [Instructions](#instructions)
- [Team](#team)
- [License](#license)
- [Connect](#connect)

## Instructions

Clone the [AndTheTemplateOfDoom](https://github.com/SuitAndCape/AndTheTemplateOfDoom) repo, add the `gitit` alias to your shell profile, make alias modifications if necessary, modify or delete the scaffold files to your liking, clone a repo/create/go to the directory of your new project, run the `gitit` command in the repo's local directory, then modify the project files.

### Clone AndTheTemplateOfDoom
Make a local clone of the AndTheTemplateOfDoom repo.  The alias below is designed to look for the clone in the custom `~/Code` directory.

### Create Alias
Copy the following code into your shell profile (`~/.bash_profile`, `~/.bashrc`, `~/.zsh`, etc.) and modify it as needed:

``` sh
## NOTE: must have `AndTheTemplateOfDoom` repo cloned into the ~/Code
#directory

## @source github.com/SuitAndCape/AndTheTemplateOfDoom
## `gitit` – Loads `AndTheTemplateOfDoom` default local Git repo files
alias gitit="rsync -av --exclude=\".DS_Store\" --exclude=\".git\"
~/Code/AndTheTemplateOfDoom/. $PWD/"
```

### Modify Templates
View the `README.md`, `LICENSE` (MIT), `.gitignore`, `.editorconfig`, `robots.txt`, `humans.txt`, and `SMSP.md` files.  These will be the skeleton files that make up your git and GitHub scaffolds.

Remove the files you don't plan on ever using, add files you frequently require, replace files with ones that are more relevant, and modify the remaining files to create your own personal scaffold.

It is recommended that these template files remain vague.  Instead, each time you begin a new project, fill-out the specific information in the newly generated files.

### Generate Skeleton Files
Setup and go to your new project's local directory, then generate the skeleton files by running the following command:

``` sh
gitit
```

### Modify Skeleton Files
After generating the skeleton files, edit them to specifically support your project.

#### SMSP Skeleton
The `SMSP.md` (Stories, MVP, Specs, and Pseudocode) file is meant to document the project's planning and development process, to be stored on it's own [SMSP branch](https://github.com/USERNAME/REPONAME/blob/SMSP/SMSP.md).  It contains the following sections:

1. **User Stories**
  - A user story describes the type of user, what features they want, and why they want them
  - A user story helps simplify descriptions of requirements
2. **Minimum Viable Project**
  - The MVP consists of the minimum features required to satisfy the needs of early adopters
  - Each following iteration focuses on developing a new feature, based on what the users want next
3. **Specifications**
  - _Input_
    + What input (code, commands, information, etc.) the app will need to accept
  - _Output_
    + What output (mathematical computations, search data, reports, etc.) the app should return
4. **Pseudocode**
  - _Pseudocode Outline_
    + English-like syntax that resembles a programming language
  - _Pseudocode Translation_
    + An English translation of the Pseudocode Outline
5. **Additional**
  - _Technologies_
    + The technologies that are chosen or were considered for the project
  - _Process_
    + The steps chosen or considered for completing the MVP or the entire project

--------------------------------------------------------------------------------

## Team

[The humans responsible and technology colophon](https://github.com/USERNAME/REPONAME/blob/master/humans.txt).

- **Ali Esmaili** _(Developer & Designer)_: [AESM](https://github.com/AESM)
- **Name** _(role)_: [USERNAME](https://github.com/USERNAME)
- **Name** _(role)_: [USERNAME](https://github.com/USERNAME)
- ...

## License

This [project](#title) is copyright © 2013-2016 Ali Esmaili | SuitAndCape.  It is free software that may be redistributed under the terms specified in the [LICENSE](https://github.com/USERNAME/REPONAME/blob/master/LICENSE).

This is based on [The MIT License (MIT)](http://opensource.org/licenses/MIT).  For more information, visit the [Open Source Initiative](http://opensource.org/) website.

## Connect

|               :tophat:               |               :rocket:               |
| ------------------------------------ | ------------------------------------ |
**_SuitAndCape GitHub_** | https://github.com/SuitAndCape
**_Personal GitHub_**    | https://github.com/AESM
**_Website_**            | http://SuitAndCape.github.io/
**_LinkedIn_**           | https://www.linkedin.com/in/SuitAndCape
**_Twitter_**            | https://twitter.com/SuitAndCape
