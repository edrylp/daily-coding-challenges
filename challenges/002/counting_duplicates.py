def duplicate_count(text):
    cleaned_text = text.lower()
    unique_characters = []
    duplicate_count = 0

    for char in cleaned_text:
        if char not in unique_characters:
            unique_characters.append(char)

    for unique_char in unique_characters:
        count = 0

        for char in cleaned_text:
            if unique_char == char:
                count += 1

        if count > 1:
            duplicate_count += 1

    return duplicate_count


"""
More pythonic version:

from collections import Counter

def duplicate_count(text):
    counts = Counter(text.lower())
    return sum(count > 1 for count in counts.values())
"""