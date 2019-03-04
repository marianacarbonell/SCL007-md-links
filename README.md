# Markdown Links

## Preámbulo

Markdown Links, es una librería hecha en Javascript, que trabaja con Node.js desde la terminal, comprobando los estados de los enlaces existentes en archivos cuya extensión sea ".md". Al final se imprime un reporte con cierta información de cada enlace, como la url, el texto y la ruta. 

## Características

1.Lee solo archivos con la extensión .md.

2.Extrae y lista todos los links que contenga el archivo,

3.Agregando la opción --validate valida estado actual de los links encontrados.

## Pre - requisitos

1. Instalar Node.js en su computador

2. Instalar markdown-link-extractor.

## Uso e Instalación

1.Para instalar la librería desde la terminal, situada en el directorio de tu proyecto,escribe el siguiente comando

$npm install https://github.com/marianacarbonell/SCL007-md-links

2. Seguidamente escriba el siguiente comando para obtener los links:

$md-links < ruta de tu archivo>

3. Para hacer uso de la opción "--validate" escribe lo siguiente:

$md-links < ruta de tu archivo> --validate

