def to_camel_case(text):
    words = text.replace("_", "-").split("-")
    converted_words = []

    converted_words.append(words[0])
    for word in words[1:]:
        converted_words.append(word[0].upper() + word[1:])

    return ''.join(converted_words)


# More pythonic version
def to_camel_case(text):
    words = text.replace("_", "-").split("-")
    return words[0] + ''.join(word.capitalize() for word in words[1:])
