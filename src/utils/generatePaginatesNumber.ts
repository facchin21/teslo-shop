

export const generatePagination = (currentPage: number, totalPage: number) => {

    // Si el numero total de paginas es menor o igual a 7 entonces se muestran todas las paginas
    if (totalPage <= 7) {
        return Array.from({ length: totalPage }, (_, i) => i + 1);
    }

    // Si la pagina actual esta entre las primeras 3 paginas 
    // mostrar las primeras 3, puntos suspensivos y las ultimas 2 paginas

    if (currentPage <= 3) {
        return [1, 2, 3, '...', totalPage - 1, totalPage];
    }

    // Si la pagina actual esta entre las ultimas 3 paginas
    // Entonces motrar las primeras 2 paginas, puntos suspensivos y las ultimas 3 paginas

    if (currentPage > totalPage - 3) {
        return [1, 2, '...', totalPage - 2, totalPage - 1, totalPage];
    }

    // Si la pagina actual esta en otro lugar medio
    // mostrar primera pagina, puntos suspensivos, pagina actual, puntos suspensivos y ultima pagina

    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPage];
}