export const markFavourites = (tree, favourites) => {
    const isFavourite = favourites.includes(tree.id) 

    return {
        ...tree
        isFavourite
        nodes: tree.nodes.map(childNode => markFavourites(childNode,favourites))
    }
}