---
path: "/blog/termcaps"
date: "2018-01-08"
title: "Les termcaps"
template: article
author: Loïc Lefloch
description: Termcap est une base de données des possibilités des terminaux
tags:
  - linux
  - c
---

> Termcap est une base de données des possibilités des terminaux (voir man termcaps). 
> Cette bibliothèque est néanmoins obsolète et a été remplacée par ncurses.

# Introduction


En langage c, la bibliothèque termcaps permet de tirer partis des possibilités du terminal. On peut l’utiliser, par exemple, pour s’y déplacer.

Dans la page de manuel, on y vois décris les différentes possibilités, associées à un identifiant de deux lettres. Par exemple, us qui correspond à un début de soulignement.

# Utilisation de la bibliothèque termcaps en c

Les headers à inclure sont :

- termios.h
- unistd.h
- term.h

A la compilation, on rajoute l’option : `-lncurses`

# Initialisation des termcaps

On commence en tout premier lieu par appeler la fonction `tgetent(NULL, NomDuTerminal);`.
Le nom du terminal se trouve dans la variable `TERM` de  l’environnement. On peut la récupérer grâce à la fonction `getenv`.

```c
int              main(int ac, char **av, char **env)
{
  char           *name_term;
  struct termios term;
 
  if ((name_term = getenv("TERM")) == NULL)
     return (-1);
  if (tgetent(NULL, &name_term) == ERR)
     return (-1);
  // remplis la structure termios des possibilités du terminal.
  if (tcgetattr(0, term) == -1)
     return (-1);
}
```

Nous avons désormais une variable *term de type struct termios contenant des informations sur le terminal. C’est via cette variable que nous allons pouvoir changer le comportement du terminal.

La structure termios est définie ainsi :

```c
struct termios {
    tcflag_t c_iflag;
    tcflag_t c_oflag;
    tcflag_t c_cflag;
    tcflag_t c_lflag;
    cc_t c_cc[NCCS];
    speed_t c_ispeed;
    speed_t c_ospeed;
};
```

Nous allons modifier cette structure afin de modifier le comportement du shell. Par exemples :

```c
term.c_lflag &= ~(ICANON); // Met le terminal en mode canonique.
term.c_lflag &= ~(ECHO); // les touches tapées ne s'inscriront plus dans le terminal
term.c_cc[VMIN] = 1;
term.c_cc[VTIME] = 0;
// On applique les changements :
if (tcsetattr(0, TCSADRAIN, &term) == -1)
return (-1);
```

Le mode canonique met le terminal en mode « interactif » : un read sur l’entrée standart renverra son résultat non plus lorsque la touche [ENTREE] est pressée, mais à chaque touche enfoncée (ou plus selon la valeur de VMIN). Cela permet notamment de pouvoir lancer une action a chaque touche pressée : gestion des flèches par exemple. VTIME permet quand a lui un retour de read tout les n délai.


tcsetattr permet d’appliquer les changements : il prend en paramètres un int fd, une option et notre structure. Les différentes options sont (source : man tcsetattr)

- `TCSANOW` : the change occurs immediately
- `TCSADRAIN` : the change occurs after all output written to fd has been transmitted. This function should be used when changing parameters that affect output.
- `TCSAFLUSH` : the change occurs after all output written to the object referred by fd has been transmitted, and all input that has been received but not read will be discarded before the change is made.

Notre terminal est désormais prêt.

## Rétablir le shell par défaut

Lorsque l’on change le comportement du shell, lorsque l’on quitte notre programme, il faut le faire revenir à son état par défaut. On utilise tcgetattr puis on applique à noter structure les mêmes changements fais précédemment.

```c
struct termios term;
 
if (tcgetattr(0, &term) == -1)
   return (-1);
term.c_lflag = (ICANON | ECHO);
if (tcsetattr(0, 0, &term) == -1)
   return (-1);
```

# Exemples concrets d’utilisation

## Repérer une touche

Voici un petit code en c qui va repérer la touche. Il faut savoir que dans une telle configuration du terminal, read renverra un buffer de type char de 3 cases contenant dans chacune d’elle un nombre permettant d’identifier la touche. Dans la plupart des cas, il suffit de regarder la première case, mais pour les flèches par exemple, nous regarderont la seconde, la première case indiquant qu’il s’agit d’une flèche sans spécifier laquelle.


```c
int main(int ac, char **av, char **env)
{
  char *name_term;
  struct termios term;
 
  if ((name_term = getenv("TERM")) == NULL)
     return (-1);
  if (tgetent(NULL, &name_term) == ERR)
     return (-1);
  // remplis la structure termios des possibilités du terminal.
  if (tcgetattr(0, term) == -1)
     return (-1);
  handleKey();
  return (0);
}
 
int voir_touche()
{
  char buffer[3];
 
  while (1)
  {
    read(0, buffer, 3);
    if (buffer[0] == 27)
      printf("It's an arrow !\n");
    else if (buffer[0] == 4)
    {
      printf("Ctlr+d, quitting..\n");
      return (0);
    }
  }
  return (0);
}
```

Ce programme est volontairement restreint. Il s’agit juste ici de montrer comment l’on peut gérer les touches d’un terminal en c.


# Aller plus loin : utiliser les possibilités des termcaps

Comme nous l’avons vus, les différentes possibilités, tel que souligner, son représentées par deux lettres. Voyons comment les utiliser :

```c
char *res;
 
/*
** on appel la fonction tgetstr qui va remplis un char * avec les différentes
** instructions à réaliser pour réaliser notre demande. Ici il s'agit de "cl".
*/
if ((res = tgetstr("cl", NULL)) == NULL)
    return (-1);
 
/*
** On utilise tputs pour réaliser les instructions contenues dans notre char *res.
** Cette fonction prend en dernier paramètre un pointeur sur fonction. On doit donc lui donner le nom
** d'une fonction prototypé ainsi : int my_outc(int c). et qui contiendra pour tout code : my_putchar(c);
*/
tputs(res, 0, my_outc);
```

Nous avons ici effacé l’écran à la manière d’un clear (Ctrl+L). Mais de nombreuses autres possibilités existent : souligner, surligner, se déplacer, etc.

## Se mouvoir dans le terminal

Nous avons vus comment lancer un évenement en fonction de la touche pressée. Nous pouvons donc savoir si l’utilisateur à appuyer sur la flèche gauche, la droite, sur espace, etc.

Voyons comment faire bouger le curseur dans le terminal, afin que l’appui sur une flèche le fasse bouger.

```c
char *res;
 
res = xtgetstr("cm", &area);
/*
** On utilise la fonction tgoto, qui va retourner une série d'instructions (sous forme de chaine de caractère)
** afin de déplacer le curseur jusqu'à l'endroit voulu.
*/
tputs(tgoto(res, pos_x, pos_y), 1, my_outc);
```

On a placé le curseur à la position (x, y). Si nous voulons juste déplacer le curseur d’un vers la droite, il faudrait connaitre la position originale du curseur et ajouter 1 a pos_x.
Il existe une autre façon de faire, plus simple, qui ne nécessite pas de connaitre la position du curseur : on utilise `nd` avec `tgetstr`.
