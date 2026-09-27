def make_readable(seconds):
    hour = seconds // 3600
    minute = (seconds % 3600) // 60
    second = seconds % 60

    time = [hour, minute, second]

    return ":".join([str(unit).zfill(2) for unit in time])


# Simpler version:
def make_readable(seconds):
    hours = seconds // 3600
    minutes = (seconds % 3600) // 60
    seconds %= 60

    return f"{hours:02}:{minutes:02}:{seconds:02}"