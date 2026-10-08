def alphanumeric(password: str) -> bool:
    return password.isalnum()


# Using all():
def alphanumeric(password: str) -> bool:
    return bool(password) and all(c.isascii() and c.isalnum() for c in password)


# Using `re`:
import re

def alphanumeric(password: str) -> bool:
    return bool(re.fullmatch(r"[A-Za-z0-9]+", password))