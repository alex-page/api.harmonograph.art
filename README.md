# api.harmonograph.art

> 👩‍🎨 Draw a harmonograph with a URL

## Usage

The URL will return an SVG of a randomised harmonograph with a `#000` stroke color, `1px` stroke width and a size of `700px`:

[https://api.harmonograph.art/](https://api.harmonograph.art/)

<p align="center">
	<img src="https://api.harmonograph.art/" alt="Randomised lissajous curves" width="500">
</p>


## Options

The URL follows this pattern:

https://api.harmonograph.art/strokeColor/backgroundColor/strokeWidth/size/animationDuration/

| Option | Description | Default value | Type |
| --- | --- | --- | --- |
| strokeColor | The color of the line | `#000` | _string_ |
| backgroundColor | The background color of the svg | `transparent` | _string_ |
| strokeWidth | The width of the line | `1` | _number_ |
| size | The size of the svg | `700` | _number_ |
| animationDuration | Seconds it takes to draw harmonograph | `30` | _string_ |

[https://api.harmonograph.art/3dfcb3/1C65F8/0.5/400/60](https://api.harmonograph.art/3dfcb3/1C65F8/0.5/400/60)

<p align="center">
	<img src="https://api.harmonograph.art/3dfcb3/1C65F8/0.5/400/60" width="400" alt="Randomised lissajous curves with 0.5 stroke width, 400pixels in size and dark blue background and bright green stroke color">
</p>



## Getting started

To get started locally make sure you have `node` and `npm` installed:

```
npm install && npm run dev
```

Then you can open [https://localhost:3000/](https://localhost:3000/) to see the API running locally.


## Release History

* v0.0.0 - 💥 Initial release
