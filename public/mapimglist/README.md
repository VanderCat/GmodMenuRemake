# Supported maps
This json contains style definitions to new game list. The menu will try to detect style automaticly depending on map tag (`gm_`,`rp_`, etc.)

You can start pull request with more map support if you want add one.

## Styles
- Sandbox
- Roleplay

## Properties
- `text`:
  - `tag`: 
    - `text`:`string` - subtext below map name (map tag by default)
    - `align`:`number` - `0`: left, `1`: center, `2`: right
    - `style`:`CSS (string)` - custom style
  - `displayname`: 
    - `text`:`string` - big text in center (map name by default)
    - `align`:`string` - `0X`: left, `1X`: center, `2X`: right, `X0`: top, `X1`: center, `X2`: bottom (e.g. `"align": "11"` for placing the text in center)
    - `style`:`CSS (string)` - custom style
- `bgimg`:`URI (string)` - background image (will use blurred map icon if not provided or unaccessible)
- `logo`:`URI (string)` - NYI Logo in front of bg (if not provided tag text and display name will be shown)
- `style`:`CSS (string)` - custom style