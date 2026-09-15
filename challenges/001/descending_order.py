def descendingOrder(number):
    # convert the int into a str
    numbers_str = str(number)

    # initialize an empty array
    numbers_list = []

    # iterate through the string and add to array
    for x in numbers_str: 
        numbers_list.append(x)
    

    # Iterate through the array
    for i in range(len(numbers_list)):

        # Find the largest number and set it to max
        for j in range(i + 1, len(numbers_list)):

            if numbers_list[j] > numbers_list[i]: 
                numbers_list[i], numbers_list[j] =  numbers_list[j], numbers_list[i]
               
    result = int(''.join(numbers_list))
    return result


print(descendingOrder(42145))


"""
More pythonic version:

def descendingOrder(number): 
    return int(''.join(sorted(str(number), reverse=True)))
"""