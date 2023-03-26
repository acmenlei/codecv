# Contribute Guidelines
Thank you for your time. Your contribution will make this project even better! Be sure to take some time to read the Getting started guide below before submitting your contribution.

## Semantic version
The project follows the semantic version. We release revision numbers for significant bug fixes, sub-release numbers for new features or unimportant changes, and major release numbers for significant and incompatible changes.

Each significant change will be recorded in the `changelog`.

## Submit Pull Request
1. The Fork the [warehouse](https://github.com/Acmenlei/markdown-resume-to-pdf), from ` master ` create branches. Please send pull request to `feature` branch for new functionality implementation. Other changes are sent to the `master` branch.
2. Use `npm install pnpm -g` to install `pnpm`.
3. In the root directory, run the pnpm dev command.
4. Run `pnpm install` in the `/service/` directory.
5. Make changes to the code base. Make sure you test accordingly, if applicable.
6. commit git commit, please also comply with [Commit specification](#commit- Guide)
7. Submit `pull request`, if there is a corresponding `issue`, Please [link](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword).

## Commit Guide

The Commit messages follow [changelog standard](https://www.conventionalcommits.org/en/v1.0.0/) :

```bash
<type>[Optional range]: <Description>

[Optional text]

[Optional footnote]
```

### Commit type

Here is a list of commit types:

- feat: indicates a new feature or function
- fix: indicates that the defect is repaired
- docs: Updates the document
- style: Updates the code style or component style
- refactor: Code refactoring without introducing new features or bug fixes
- perf: performance optimization
- test: indicates a unit test
- chore: Other submissions that do not modify src or test files


## License

[MIT](./license)