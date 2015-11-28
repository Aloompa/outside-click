## Welcome to outside-click

A utility class for attaching "outside click" handlers to DOM elements. This allows you to listen for clicks that happen in parent or sibling elements to the element that is specified.

## Examples

#### Using in a ReactJS component:

```
const outsideClick = require('outside-click');

class MyViewComponent extends React.Component {

	componentDidMount () {
		const element = React.findDOMNode(this);
		this.outsideClick = outsideClick(element, this.close.bind(this));
	}

	componentWillUnmount () {
		this.outsideClick.off();
	}

}

```

## API

#### Attach handlers to element(s): `outsideClick(elem1, <Function>)`
> The outsideClick method takes an element (or array of elements) as the first argument and a callback as the second argument. The callback will only be triggered when an element outside the target element or elements is clicked.

#### Remove an event handler: `.off()`
> Remove the event handler from the element or elements.

## Contributing

We encourage you to contribute to outside-click by submitting bug reports and pull requests through [Github](http://github.com).

## License

outside-click is released under The [MIT License](http://www.opensource.org/licenses/MIT) (MIT)

Copyright (c) [2015] [Aloompa LLC]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
