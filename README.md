# Edvino projektas

## _Games marketplace_


## Stack'as

Aplikacija parasyta Laravel (Backend), ReactJs (Frontend) juos apjungiant InertiaJs technologija.

- [Laravel] -The PHP Framework for Web Artisans.
- [ReactJs] - A JavaScript library for building user interfaces.
- [InertiaJs] - Build single-page apps, without building an API.
- [TailWindCss] - Rapidly build modern websites without ever leaving your HTML.
- [Sass] - CSS with superpowers.



## Instaliacija



```sh
git clone https://github.com/cedvinas/games-marketplace
cd games-marketplace/
composer install
sail up -d
sail shell
php artisan migrate
php artisan db:seed
exit
npm i
npm run dev
```

Jeigu gaunamas error del autoriniu teisiu

```sh
cd ..
sudo chmod -R 777 games-marketplace/
```



   [Sass]: https://sass-lang.com/
   [TailWindCss]: https://tailwindcss.com/
   [InertiaJs]: https://inertiajs.com/
   [ReactJs]: https://reactjs.org/
   [Laravel]: <https://github.com/markdown-it/markdown-it>
  
