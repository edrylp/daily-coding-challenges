def is_square(n):    
    if n < 0:
        return False
    
    if n ** 0.5 % 1 == 0.0:
        return True
    else: 
        return False