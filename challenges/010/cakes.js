function cakes(recipe, available) {
    const sharedKeys = Object.keys(recipe).filter(key => Object.hasOwn(available, key));
    
    if (sharedKeys.length < Object.keys(recipe).length) {
      return 0;
    };

    return Math.min(...sharedKeys
      .map(key => Math.floor(available[key] / recipe[key]))
    );
}


// Simpler version:
function cakes(recipe, available) {
  return Math.min(
    ...Object.keys(recipe).map(key =>
      Math.floor((available[key] ?? 0) / recipe[key])
    )
  );
}