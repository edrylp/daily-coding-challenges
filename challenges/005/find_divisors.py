def divisors(integer):
    divisors = []

    for x in range(2, integer):
        if integer % x == 0:
            divisors.append(x)

    if divisors:
        return divisors
    else:
        return f"{integer} is prime"