def valid_braces(string):
    PAIRS = {"]": "[", ")": "(", "}": "{"}

    opening_braces = []
    chars_to_check = ["[", "(", "{"]

    for brace in string:
        if any(char in chars_to_check for char in brace):
            opening_braces.append(brace)
        elif not opening_braces:
            return False
        else:
            if PAIRS[brace] == opening_braces[-1]:
                opening_braces.pop()
            else:
                return False

    if not opening_braces:
        return True
    return False


# More pythonic version:
def valid_braces(string):
    pairs = {"]": "[", ")": "(", "}": "{"}
    opening_braces = set(pairs.values())
    stack = []

    for brace in string:
        if brace in opening_braces:
            stack.append(brace)
        elif not stack or stack.pop() != pairs[brace]:
            return False

    return not stack