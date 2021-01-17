

export const getGifs = async ( category ) => {

    // Creamos una variable para almacenar la url de consulta
    // Necesitamos usar encodeURI para que convierta texto en otro que la url pueda usar
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=aPoK3ZwEGwlL1Y0xCLDv1aZsm7mPLpCp`

    // Almacenamos la respuesta de la consulta en una variable
    const resp = await fetch( url );

    // Decodificamos la respuesta en formato json
    const { data } = await resp.json();

    // Extraemos la data que nos interesa de cada imagen, ya que tienen mucha información
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url, // Ponemos ? por si no trae images no nos de un error
        }
    })

    // console.log( gifs );
    // setImages( gifs );
    return gifs; // Esto devuelve una promesa

}