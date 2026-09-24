def cakes(recipe, available):

    shared_keys = recipe.keys() & available.keys()

    return 0 if len(shared_keys) < len(recipe) else min(
        [available[key] // recipe[key] for key in shared_keys]
    )


# Simpler version:
def cakes(recipe, available):
    return min(available.get(key, 0) // amount for key, amount in recipe.items())