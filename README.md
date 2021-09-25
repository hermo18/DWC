# INTRODUCCIÓN A GIT Y GITHUB
[Javier Hermoso](https://github.com/hermo18)

![logo github](https://blog.desafiolatam.com/wp-content/uploads/2016/05/git-github-logo.jpg "logos de git y github")

## INTRODUCCIÓN

### ¿QUÉ ES GIT?

Git es un sistema de control de versiones de [código abierto]. El control de versiones distribuido permite a los desarrolladores descargar un software, realizar cambios y subir la versión que han modificado.

### ¿QUÉ ES GITHUB?

GitHub es un portal destinado para alojar código de cualquier desarollador, al ser destinado para [código abierto] todo el código que se sube a esta plataforma será público para los demás usuarios, a no ser que se adquiera una versión de pago que permite ocultar tus proyectos.

****************
****************

## PRIMEROS PASOS

### CREAR UNA CUENTA DE GITHUB

Para crearnos una cuenta de GitHub deberemos dirigirnos al [siguiente enlace](https://github.com/). Una vez allí, deberemos seleccionar en la parte de arriba a la derecha **SIGN UP**, introduciremos nuestros datos y... ¡LISTO! :smile: Ahora cada vez que quieras entrar con tu cuenta trendrás que hacer click sobre el botón **SIGN IN**.

### USUARIOS DE LINUX

Si eres usuario de alguna distribución de Linux deberás introucir los siguientes comandos en tu terminal para poder instalar **Git**:

```
Sudo apt-get update
Sudo apt-get install git
```
A continuación, vamos a decirle a **Git** quién somos, para ello vamos a necesitar los siguientes comando:

```
git config --global user.name "Tu nombre"
git config --global user.email "ejemplo@email.com".
```

### USUARIOS DE WINDOWS

En el caso de que seas usuario de Windows deberás de instalar un pequeño programa desde este enlace de [descarga](https://github.com/git-for-windows/git/releases/download/v2.33.0.windows.2/Git-2.33.0.2-64-bit.exe). Una vez descargado e instalado, ya dispondrás de un terminal para poder realizar todas las acciones denominado **Git Bash**. Para empezar deberemos decirle a **Git** quién somos con los siguientes comandos en la terminal **Git Bash**:

A continuación, vamos a decirle a **Git** quién somos, para ello vamos a necesitar los siguientes comando:

```
git config --global user.name "Tu nombre"
git config --global user.email "ejemplo@email.com".
```
### CREACIÓN DE REPOSITORIO EN GITHUB

Antes de poder subir nuestros archivos a GitHub deberemos de crearnos un **repositorio** y ponerle el nombre que deseemos. Una vez creado, nos aparecerá una URL como esta  **https://github.com/hermo18/DWC**.
Ahora, con esta URL a mano deberemos de ir a nuestro terminal deberemos dirigirnos a la carpeta que deseemos guardar todos nuestros archivos con la instrucción **cd**. Una vez allí deberemos de ejecutar el sigueinte comando:
>git clone "URL mencionada anteriormente"

### COMANDOS PARA SUBIR ARCHIVOS A GITHUB MEDIANTE COMANDOS

1. Ahora que ya hemos creado nuestro repositorio personal vamos subir nuestros archivos mediante lineas de código.  
La primero que queremos hacer con nuestros archivos va a ser ponerlos **en seguimiento** para que Git sea consciente de que vamos a trabajar en ellos, para esto deberemos de poner el siguiente texto en la terminal:
>git add .

2. Para poder ver que todos nuestros archivos están en seguiento deberán de aparecer enverde cuando escribamos lo siguiente:
>git status

3. Seguidamente vamos a decirle a Git que todo este conjunto de archivos ya es una **versión**, para ello es preciso escribir lo siguiente:
>git commit -m "nombre de la versión"

4. **Por último** para poder subir definitivamente la versión a **GitHub** necesitamos este código:
>git push

- Una vez escrito se nos abrirá una pestaña donde deberemos identificarnos con nuestra cuenta de GitHub.


*******
*******

## INFORMACIÓN ADICIONAL

### MODIFICAR UN ARCHIVO DEL REPOSITORIO DE OTRA PERSONA



[código abierto]: https://es.wikipedia.org/wiki/C%C3%B3digo_abierto
