# angular-attrs
Like ng-class, but for attributes.

Ever wanted to add attributes based on scope variables? Now you can!

## Examples

Given scope

````javascript
$scope = {
  isSelectable: true
}
````

The following HTML

````html
<my-directive attrs="{ selectable: isSelectable }"></my-directive>
````

Will generate this:

````html
<my-directive selectable></my-directive>
````

#### Other ways

Basic values:

````html
<my-directive attrs="{ value: '1' }"></my-directive>
<!-- Will generate -->
<my-directive value="1"></my-directive>
````

Array:

````html
<my-directive attrs="[selected checked on]"></my-directive>
<!-- Will generate -->
<my-directive selected checked on></my-directive>
````

String

````html
<my-directive attrs="selected checked on"></my-directive>
<!-- Will generate -->
<my-directive selected checked on></my-directive>
````

## Contributing

Just submit a pull request.
