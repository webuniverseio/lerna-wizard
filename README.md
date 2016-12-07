![Travis CI](https://travis-ci.org/szarouski/lerna-wizard.svg?branch=master)
![Build status](https://ci.appveyor.com/api/projects/status/9w1fl2s3vu6x06nn/branch/master?svg=true)
[![Coverage Status](https://coveralls.io/repos/github/szarouski/lerna-wizard/badge.svg?branch=master)](https://coveralls.io/github/szarouski/lerna-wizard?branch=master)

# Lerna Wizard

Command line wizard for [lerna](https://github.com/lerna/lerna).  
![demo.gif](https://raw.githubusercontent.com/szarouski/lerna-wizard/master/demo.gif)

## Getting Started

Open terminal and run `lerna-wizard` if installed globally. If installed locally, you can add `"lerna-wizard": "lerna-wizard"` to you package.json `scripts` section and run `npm run lerna-wizard` in terminal.

If you would like filter out some of the commands that lerna wizard is showing (for example most likely you'll not need `lerna init` after first install), you can do so via `require('lerna-wizard')(options)`, check `bin/lerna-wizard` for more details. Options example:
```  
{
  commandMessage: 'What do you want to do?', //introduction message
  commandChoiceFilter({value}) {
    return !['ls', 'updated'].includes(value); //filter out any lerna command like bootstrap/init, ...
  }
}
```

### Prerequisites

Wizard needs [lerna](https://github.com/lerna/lerna) to be available in the command line when lerna-wizard spawns commands.

```
npm i lerna@prerelease -g
or
npm i lerna@prerelease -S (and expose lerna to command line somehow)
```

### Installing

To install lerna-wizard globally run

```
npm i lerna-wizard -g
```

Check `Getting Started` section for non-global installation details.

## Running the tests

Tests are running on travis and appveyor. If you want to run tests locally, checkout package from git repo, run `npm i` then in order to test run `npm test`.

## Built With

* [babel](https://babeljs.io/) - The compiler for writing next generation JavaScript
* [cross-spawn-promise](https://github.com/zentrick/cross-spawn-promise) - Promisified cross platform child_process#spawn and child_process#spawnSync
* [inquirer](https://github.com/SBoudrias/Inquirer.js/) - A collection of common interactive command line user interfaces
* [jest](https://facebook.github.io/jest/) - Painless JavaScript Testing
* [rimraf](https://github.com/isaacs/rimraf) - A deep deletion module for node

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/szarouski/91edf9cb92a2de1fab05b3e53dd1efc5) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/szarouski/lerna-wizard/tags). 

## Authors

* **Sergey Zarouski** - *Initial work* - [webuniverse.io](http://webuniverse.io)

See also the list of [contributors](https://github.com/szarouski/lerna-wizard/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/szarouski/lerna-wizard/blob/master/LICENSE) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Lerna authors and contributors
* [Kent C. Dodds](https://kentcdodds.com/) for his public activity, which inspired me to make this project

[![Analytics](https://ga-beacon.appspot.com/UA-61501696-1/szarouski/lerna-wizard/README)](https://github.com/igrigorik/ga-beacon)
