## Welcome to outside-click

A utility class for attaching "outside click" handlers to DOM elements.

## Examples

#### Using in a ReactJS component:

```
const OutsideClick = require('outside-click');

class MyViewComponent extends React.Component {

	componentDidMount () {
		var element = React.findDOMNode(this);
		this.outsideClick = new OutsideClick(element);
		this.outsideHandler = this.outsideClick.addHandler(this.close.bind(this));
	}

	componentWillUnmount () {
		this.outsideClick.removeHandler(this.outsideHandler);
	}

}

```

## API

#### Attach handlers to element(s): `new OutsideClick(elem1, [elem2, ...])`
> When instantiating our utility class, pass in one or more elements that we want our handlers attached to. This would be useful for when we want to attach listeners to our main target element and another related element that lives outside of it.

#### Add an event handler: `.addHandler(<Function>)`
> Attach a single event handler to the elements on our class.

#### Remove an event handler: `.removeHandler(<Function>)`
> Remove a single event handler from the elements on our class.

#### Remove all class handlers: `.removeAllHandlers()`
> This is a convenience method for removing all existing handlers that have been bound to the current class instance.

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
