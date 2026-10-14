def sum_dig_pow(a,b):
    result = []
    for i in range(a,b+1):
        if i < 10:
            result.append(i)
        else: 
            list = [int(char) ** (index + 1) for index, char in enumerate(str(i))]
            if sum(list) == i:
                result.append(i)
    return result


#More pythonic version:
def sum_dig_pow(a, b):
    def is_eureka(n):
        return sum(int(digit) ** power
                   for power, digit in enumerate(str(n), start=1)) == n

    return [n for n in range(a, b + 1) if is_eureka(n)]