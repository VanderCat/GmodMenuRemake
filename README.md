# Garry's Menu Remake
This project aims to rewrite all Garry's Mod Menu to modern framework (Vue.js v2).

This mod is an early stage of developement, not so much implemented yet.

What's impemented:
- Main Menu
- Running lua from html
- News are pulled from game
- Opening problem helper

You can check the look of menu [**here**](https://vandercat.github.io/GmodMenuRemake/)

## Installation
To install this menu we need to build it or download from Releases (if they exist)

Move contents of built menu to `%SteamLibrary%/GarrysMod/garrysmod/html/`. **(!!DONT FORGET TO BACKUP IT!!)**
After this you need to rename (in `lua/menu/mainmenu.lua`) `self.HTML:OpenURL( "asset://garrysmod/html/menu.html" )` to `self.HTML:OpenURL( "asset://garrysmod/html/index.html")` or  `%SteamLibrary%/GarrysMod/garrysmod/html/index.html` to `main.html`

~~For some reason after building some files are not relative so we need to fix it:
find all src or link and add a dot (e.g `src="/js/chunk.js"` => `src="./js/chunk.js"`)~~ Fixed

## Building
First we need to install dependencies:
```
mpm install
```
And then

```
npm run build
```
The built menu will be in `.\dist` folder
