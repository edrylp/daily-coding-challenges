from pathlib import Path
import requests


# Get Codewars kata
kata_id = input("Kata ID: ")


# URLs
api_url = f"https://www.codewars.com/api/v1/code-challenges/{kata_id}"
kata_link = f"https://www.codewars.com/kata/{kata_id}"


response = requests.get(api_url, timeout=10)
response.raise_for_status()

data = response.json()
kata_name = data.get("name")
kata_description = data.get("description")
kata_slug = data.get("slug")

# Find the next day number
challenges = Path("challenges")
entries = [
    int(path.name)
    for path in challenges.iterdir()
    if path.is_dir() and path.name.isdigit()
]

day = max(entries, default=0) + 1
day_folder = challenges / f"{day:03}"
day_folder.mkdir()
js_filename = kata_slug.split("-")[0] + ''.join(word.capitalize() for word in kata_slug.split("-")[1:]) + ".js"
py_filename = "_".join(kata_slug.split("-")) + ".py"

# problem.md template
md_template = f"""# Day {day:03} - {kata_name}

**Source:** [Codewars - {kata_name}]({kata_link})

## Problem

{kata_description}
"""


# Write md file
(day_folder / "problem.md").write_text(md_template, encoding="utf-8")
(day_folder / f"{py_filename}").touch()
(day_folder / f"{js_filename}").touch()

print(f"Successfully created {js_filename}, {py_filename}, and problem.md file inside day {day:03} folder!")
