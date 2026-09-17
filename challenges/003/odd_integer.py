def find_it(seq):
    unique_integers = []

    for digit in seq:
        if digit not in unique_integers:
            unique_integers.append(digit)

    for int in unique_integers:
        count = 0

        for digit in seq:
            if int == digit:
                count += 1

        if count % 2 != 0:
            return int


"""
Simpler version
def find_it(seq):

    for int in seq:
        if seq.count(int) % 2 != 0:
            return int
"""