# Programming Training

This repository helps individuals practice programming concepts by providing a "practice
setting." That is, an opinionated JavaScript environment and a set of practice problems.

Here are some ways to use this repository:

- Have a mentor assign practice problems.
- Work with a mentor to understand the concepts of TDD.

This repository cannot:

- Teach you programming concepts.
- Teach you everything required to be a professional programmer.

## Getting Started

With a working NodeJS installation, clone this repository and run the following
commands:

```bash
# Install required dependencies.
yarn install

# After working on a practice problem
yarn jest uva-00100

# After "completing" a practice problem, run this to verify your work.
# Warning: Running this command may spoil the problem solving process.
# INCLUDE_SUITES=1 yarn jest uva-001000
```

## Why not use an online judge?

Using online judges requires a non-trivial amount of effort to parse the input and
format the output. Online judges also have a slow-feedback loop and support a narrow
selection of languages.
