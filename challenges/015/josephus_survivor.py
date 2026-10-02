def josephus_survivor(n,k):
    numbers_list = [i for i in range(1, n+1)]

    step = k - 1
    index = 0
    numbers_length = n

    while numbers_length > 1:
        index = (index + step) % numbers_length
        removed = numbers_list[index]
        numbers_list.remove(removed)
        numbers_length -= 1

    return numbers_list[0]


# Simpler, more pythonic version:
def josephus_survivor(n,k):
    survivor = 0 
    for i in range(2, n + 1):
        survivor = (survivor + k) % i
    return survivor + 1