### Canvas

A React component for freely drawing any content on the page.

#### Valid props

| Prop name |                                Description                                 |              Type |     Default |
| --------- | :------------------------------------------------------------------------: | ----------------: | ----------: |
| style     |                 Defines view styles. [See more](/styling)                  | _Object_, _Array_ | _undefined_ |
| paint     |                              Painter function                              |        _Function_ | _undefined_ |
| debug     |  Enables debug mode on view bounding box. [See more](/advanced#debugging)  |         _Boolean_ |     _false_ |
| fixed     | Renders component in all wrapped pages. [See more](/advanced#page-wrapping) |         _Boolean_ |     _false_ |

React-pdf does not check how much space your drawing takes, so make sure you always define a `width` and `height` on the `style` prop.

##### Painter function

Prop used to perform drawings inside the Canvas. It takes 3 arguments:

- `Painter object`: Wrapper arround _pdfkit_ drawing methods. Use this to draw inside the Canvas
- `availableWidth`: Width of the Canvas element.
- `availableHeight`: Height of the Canvas element.

##### Painter object

Wrapper arround _pdfkit_ methods you can use to draw inside the Canvas. All operations are chainable. For more information about how these methods work, please refer to [pdfkit documentation](http://pdfkit.org/).

Available methods:

- dash
- clip
- save
- path
- fill
- font
- text
- rect
- scale
- moveTo
- lineTo
- stroke
- rotate
- circle
- lineCap
- opacity
- ellipse
- polygon
- restore
- lineJoin
- fontSize
- fillColor
- lineWidth
- translate
- miterLimit
- strokeColor
- fillOpacity
- roundedRect
- strokeOpacity
- bezierCurveTo
- quadraticCurveTo
- linearGradient
- radialGradient

---
