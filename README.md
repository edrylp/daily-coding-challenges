# Daily Coding Challenges

I'm trying to build a habit of coding every single day, so this is where I'm
keeping track of it.

The rule is simple: one [Codewars](https://www.codewars.com/) kata a day.
I'll solve it in JavaScript first, then go back and solve the exact same one
in Python.

Learning two languages at once isn't going to be easy, and there will be days
where switching between them messes with my head. But I'm betting that
showing up every day, even when it's a struggle, is what actually makes
the difference over time.

## Structure

```text
daily-coding-challenges/
├── README.md
└── challenges/
    └── 001/
        ├── problem.md      # the kata — link, difficulty, what it's asking
        ├── javascript.js   # solved first
        └── python.py       # same problem, solved again in Python
```

## Commits

Each day gets three commits, one for the problem and one for each language:

```bash
git commit -m "problem: day 0XX - <kata name>"
git commit -m "js: day 0XX - <kata name>"
git commit -m "python: day 0XX - <kata name>"
```
