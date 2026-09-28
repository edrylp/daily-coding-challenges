def rgb(r, g, b):
    return "".join(hex(max(0, min(255, x)))[2::].upper().zfill(2) for x in [r, g, b])


# Alternative version:
def rgb(r, g, b):
    return "".join(f"{max(0, min(255, c)):02X}" for c in (r, g, b))