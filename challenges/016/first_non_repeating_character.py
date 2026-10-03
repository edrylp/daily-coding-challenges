def first_non_repeating_letter(s):
    chars = list(s.lower())
    return (
        ""
        if not [char for char in s if chars.count(char.lower()) == 1]
        else [char for char in s if chars.count(char.lower()) == 1][0]
    )


# More efficient/pythonic version:
from collections import Counter

def first_non_repeating_letter(s):
    counts = Counter(s.lower())
    for char in s:
        if counts[char.lower()] == 1:
            return char
    return ""