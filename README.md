# CSS - Reference

data()
```javascript
$("body").data( "foo", 52 );
$("body").data( "bar",  { myType: "test", count: 40 } );
$("body").data( { baz: [ 1, 2, 3 ] } );
$("body").data( "foo" );    // 52
$("body").data(); //{ foo:52,  bar:{ myType:"test",count:40},  baz:[ 1, 2, 3 ] }


<div data-role="page" data-last-value="43" data-hidden="true" data-options='{"name":"John"}'></div>
$( "div" ).data( "role" ) === "page";
$( "div" ).data( "lastValue" ) === 43;
$( "div" ).data( "hidden" ) === true;
$( "div" ).data( "options" ).name === "John"; 
```