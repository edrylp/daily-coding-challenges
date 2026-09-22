GOOD_WORTH = [1, 2, 3, 3, 4, 10]
EVIL_WORTH = [1, 2, 2, 2, 3, 5, 10]


def good_vs_evil(good, evil):

    good_list = good.split(" ")
    evil_list = evil.split(" ")

    good_values = []
    evil_values = []

    for i in range(len(GOOD_WORTH)):
        good_values.append(GOOD_WORTH[i] * int(good_list[i]))

    for i in range(len(EVIL_WORTH)):
        evil_values.append(EVIL_WORTH[i] * int(evil_list[i]))

    good_score = sum(good_values)
    evil_score = sum(evil_values)

    if good_score > evil_score:
        return "Battle Result: Good triumphs over Evil"
    elif good_score < evil_score:
        return "Battle Result: Evil eradicates all trace of Good"
    return "Battle Result: No victor on this battle field"


# Simpler, more pythonic version:
def good_vs_evil(good, evil):
    good_score = sum(w * int(c) for w, c in zip(GOOD_WORTH, good.split()))
    evil_score = sum(w * int(c) for w, c in zip(EVIL_WORTH, evil.split()))

    if good_score > evil_score:
        return "Battle Result: Good triumphs over Evil"
    elif evil_score > good_score:
        return "Battle Result: Evil eradicates all trace of Good"
    return "Battle Result: No victor on this battle field"