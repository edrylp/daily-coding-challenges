def spin_words(sentence):
    words = sentence.split(" ")
    flipped_words = []

    for word in words:
        if len(word) > 4:
            flipped_words.append(word[::-1])
        else: 
            flipped_words.append(word)

    return " ".join(flipped_words)


# Simpler version:
def spin_words(sentence):
    words = sentence.split()
    return " ".join(
        word[::-1] if len(word) > 4 else word
        for word in words
    )