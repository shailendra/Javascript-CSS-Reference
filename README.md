# CSS - Reference

## +@media Query
```css
@media (min-width: 400px) and (max-width: 700px) { … }
@media (min-width: 20em) { … }
@media (orientation:portrait) { … }
@media (device-width < 800px) { … }
@media (device-aspect-ratio: 16/9) { … }
@media (device-aspect-ratio: 32/18) { … }
@media (device-aspect-ratio: 1280/720) { … }
@media (device-aspect-ratio: 2560/1440) { … }
@media (resolution >= 2dppx)
@media (grid) and (max-width: 15em) { … }
```
<br>

#### To change the background and text color in different lighting conditions you would write something like this
```css
@media (luminosity: normal) {
    body {
        background: #f5f5f5;
        color: #262626;
    }
}
@media (luminosity: dim) {
    body {
        background: #e9e4e3;
    }
}
@media (luminosity: washed) {
    body {
        background: #ffffff;
    }
}
```
<br>

 
#### For accessibility purposes, user agents may offer manual controls allowing the user to switch between the 3 levels of independently of the ambient light level, as high contrast or low contrast styles may be more suitable for users with visual disabilities.
```css 
@media (light-level: normal) {
  p { background: url("texture.jpg"); color: #333 }
}
@media (light-level: dim) {
  p { background: #222; color: #ccc }
}
@media (light-level: washed) {
  p { background: white; color: black; font-size: 2em; }
}
```

#### The media feature device-aspect-ratio only applies to visual devices. On an speech device, expressions involving device-aspect-ratio will therefore always be false:
```html
<link media="speech and (device-aspect-ratio: 16/9)" rel="stylesheet" href="example.css">
```
<br>


#### For accessibility reasons, even on devices whose pointing device can be described as fine, the UA may give a value of coarse or none to this media query, to indicate that the user has difficulties manipulating the input device accurately or at all.
Make radio buttons and check boxes larger if we have an inaccurate pointing device
```css
@media (pointer:coarse) {
  input[type="checkbox"], input[type="radio"] {
    min-width:30px;
    min-height:40px;
    background:transparent;
  }
}
```
<br>

#### For accessibility reasons, even on devices that do support hovering, the UA may give a value of hover: none to this media query, to opt into layouts that work well without hovering.
Only use a hover-activated drop down menu on devices that can hover.
```css
@media (hover) {
  .menu > li {display:inline-block;}
  .menu ul {display:none; position:absolute;}
  .menu li:hover ul {display:block; list-style:none; padding:0;}
}
```
<br><br><br>

# CSS Rule

- If two div nested in parent and child relation then child div cover parent div, to see parent div color, then give padding to parent div.

- Block element take full width of parent, if we give width less than parent div, then next sibling element will not come beside previous element.
- Inline Element always align next to each other
- Many elements has default margin and may change as per browser. To solve this use CSS Reset for cross-browser compatibility.
- Difference between display: block, inline, inline-block
![alt](images/image36.jpg)

- **Collapse or Overlap Margin** <br>
**Without Float** – : If two elements has margin 10px, then gap between them will be 10px, not 20px. Or whichever element has higher margin, gap will be that much.<br>
![alt](images/image39.jpg)<br><br>
**With Float – :** If two elements has margin 10px, then gap between them will be 20px. In float margin never overlap, if two element has 10px and 20px then gap will 30px.<br> 
**margin-top:10px, <br> margin-bottom:10px**<br>
![alt](images/image25.jpg)<br><br> 
margin-top:10px, <br> margin-bottom:10px <br> and .orange{margin-bottom:30px;}<br>
![alt](images/image17.jpg)<br><br> 
margin-top:10px, <br> margin-bottom:10px <br> and .orange{margin-bottom:30px;}  <br> .green{margin-bottom:30px;}<br>
![alt](images/image11.jpg)<br><br>
margin-top:10px, <br>margin-bottom:10px <br>and .orange{margin-right:30px} <br>
![alt](images/image38.jpg)<br><br>
margin-top:10px, <br>margin-bottom:10px <br>and .orange{margin-bottom:30px; margin-right:30px} <br>
![alt](images/image8.jpg)<br>

- **Padding and Margin Never Overlap -** <br>
if parent div has padding 10px and child div has margin 10px then inner gap between child and parent will be 20px; **this work same when child has float.** child has **margin-top:10px, margin-bottom:10px** and parent has **padding:10px** <br>
**without child float**<br>
![alt](images/image39.jpg)<br><br>
**with child float**<br>
![alt](images/image30.jpg)<br>

- First and Last Child Margin apply to Parent - if parent don’t have padding, border and overflow:hidden then first and last child margin apply to its parent child.
- Overflow:hidden and border  is help to parent div by restrict for applying child div margin to parent if parent div don’t have padding.
- If div tag are empty then it will not render and will not take space in html.
- Turn Inline element to block level by display:block; and block element to  inline by display:inline;
- Inline element you can’t give width, width not effect on inline element. if you give float:left to inline element then inline element start floating + start behaving like Block level element, now margin, overlap margin, width will work.
- If you give width:auto to block element, it will not expand according to child element,  its will always take parent width.
- if you give padding to Inline element and parent is block element then inline element expand more than parent height, expand from top and bottom, but parent div position never change from top and not effect of parent border, Border and Padding doesn’t solve this, Overflow hidden only mask expanded area but doesn’t solve this.<br> 
![alt](images/image10.jpg)

- if you give Margin to Inline element then only Left, Right margin will work     and     Top, Bottom margin will ignor<br>
![alt](images/image2.jpg)

- float left <br>
if Orange is block and float left element, and Green n Blue are only block element then float will work like below and all three are in child of one parent<br>
![alt](images/image19.jpg)<br>
![alt](images/image18.jpg)<br>
![alt](images/image37.jpg)<br>
![alt](images/image44.jpg)<br>
![alt](images/image42.jpg)<br><br>
if Orange element float:right<br>
![alt](images/image3.jpg)<br><br>
if Blue element given clear:left<br>
![alt](images/image40.jpg)<br><br>
if one more Orange element added below to Blue element with same Orange styles<br>
![alt](images/image12.jpg)<br><br>
if Blue element remove clear:left<br>
See, mark, observe in below and above – float element will start floating below after its previous block element, if previous is also float element then they reside side by side.<br>
![alt](images/image24.jpg)<br><br>
if Blue is out of parent and Blue element remove clear:left <br>
![alt](images/image35.jpg)<br>
![alt](images/image1.jpg)<br><br>
if Blue element give clear:left, but white gap come<br>
![alt](images/image16.jpg)<br><br>
to solove white gap give Red parent element overflow:hidden<br>
![alt](images/image5.jpg)<br><br>
If we give float:left to element then clear:left will work,
ane if give float:right to element then clear:right will work,
to solve this use clear:both<br>
When a block-level element is floated, its width is calculated based on the width of the content inside it

- Box Model – Block element width increase according to  padding, border, margin.<br>
![alt](images/image32.jpg)

- To fix Box Model issue use box-sizing:border-box, if parent width:300px and 3 child has width:100px, padding:3px, float:left; then child width will be 103px by box modelling and last child will fall down,.<br>
![alt](images/image20.jpg)<br>
![alt](images/image14.jpg)<br>  
to solve this use box-sizing:border-box to child so child width be 100px including padding<br>
![alt](images/image23.jpg)<br>
![alt](images/image6.jpg)<br>

- **Absolute** <br>
if parent div has default property position:static and child div is position:absolute + doesn’t set top, left then it will align to parent div’s top left according to parent padding.<br>
![alt](images/image22.jpg)<br>
check below, Orange div set position:absolute and doesn’t set top left<br>
![alt](images/image33.jpg)<br>
check below, now Orange div set position:absolute and top:0px; left:0px;
in this case Orange div will check parent’s parent div position property,
if its relative or absolute then orange div will align to it
if not then again check parent’s parent till body.<br>
![alt](images/image21.jpg)<br>
margin will apply to absolute element but will not work like overlap margin.
margin value will effect from left and top of that element

- Block Element are  **ul, Table,  div, dl, fieldset, form, h1, h2, h3, h4, h5, h6, hr, li, main, nav, address, blockquote, dd, noscript, ol, p, pre**
- Bolck HTML5 Element are **article, aside, canvas, figcaption, figure, footer, header, hgroup, tfoot, output, section, video**
- Inline Element **a, b, strong,  big, i, img, small, button, input, span, textarea, label, map, select,  acronym, cite, code, dfn, em, kbd, samp, time, var, bdo, br, object, q, script,  sub, sup**
<br><br><br>


### Text font size increase according to Viewport Width and Height, in percentage
text increase according to Viewport Width
```css
.parent{
  font-size: 10vw;
}
```

Text increase according to Viewport Height
```css
.parent{
  font-size: 10vh;
};
```
<br><br>
# CSS Aligment

### Block Element’s inner content align center
```css
div {text-align:center;}
```
<br><br>
### Vertical and Horizontal Alignment
Horizontal Centering Block Level Elements
```css
div#container {margin:0 auto;}
```
<br><br>

### Vertical and Horizontal Centering Block Level Elements, 
left, top, margin-left, margin-top
```css
div#container {
    position: absolute; 
    top: 50%; left:50%; 
    width:800px; height: 500px; 
    margin-left: -400px;  margin-top: -250px;  border:#ff0000 solid thin;
}
```
<br><br>


### Vertical  and Horizontal Centering position:absolute
left, top, margin-left, margin-top
```css
.n_content{ 
    position:absolute; top:0; bottom:0;
    left:0; right:0;
    max-width:500px; height:200px; 
    margin:auto; 
    color:#fff;
}
```
<br><br>

### Vertical Centering Div Text with Line-Height
The HTML:
```html
<div id="container">some text here</div>
```
The CSS:
```css
div#container {height: 35px; line-height: 35px}
```
<br><br>


### Vertical Horizontal Center Div Text  with Padding, but increase button size according to text font size
```css
.parent{ 
    display: inline-block; 
    text-align:center; 
    padding: 10px 20px;  
    font-size: 50px;  
    background-color: #ff0000;
} 
```
```html
<a class="parent">Shailendra</a>
<a class="parent">more</a>
```
<br><br>


### Vertical Horizontal Center Div Text with “table” and “table-cell”, button size does not Increase according to text font size
CSS:
```css
.parent{
  display: table; width:350px; height:120px;
  margin: 2px; text-align:center; float: left;  
  background-color: #ff0000;
}
span{  
  display: table-cell;  
  vertical-align: middle;  
  font-size: 50px;
}
img{  
  vertical-align: middle;
}
```
HTML:
```html
<div class="parent">
  <span>Shailendra</span>
</div>
<div class="parent">
  <span>More</span>
  <span><img src="http://i.stack.imgur.com/LKMP7.png" alt="" /></span>
</div>
```
<br><br>



### Align Text and element Vertical bottom
```css
vertical-align: bottom;
```
----------
<br><br>

# Text and Font
### Text-transform
Through the CSS text-transform property you can make sure certain blocks of text are either uppercase, lowercase, or only the first letter of each word is uppercase
```css
p {text-transform: uppercase}
p {text-transform: lowercase}
p {text-transform: capitalize}
```
<br>

### Remove Dotted Outline on Links
Easy with the CSS outline property (underline, line, doted line)
```css
a {outline: none}
//or 
a {outline: 0}
```
The outline is useful for accessibility so think twice before turning it off completely. You may only want to set it for one of the specific link states mentioned above.

----------
<br><br>
# Image

### Removing the Border from Image Links
By default any image that is wrapped in a link will have a border around the image (similar to the way text is underlined). Removing the border is simple
```css
a image {border: none}
//or 
a image {border: 0}
```
Since I never want to see the border around image links I usually set the above on every site I develop.

----------
<br><br>
# Background 
### Background Images as List Bullets
Sometimes it’s nice to be able to use an image as a bullet instead of one of the supported list-style-types.
```css
ul {list-style: none}
ul li {
    background-image: url("path-to-your-image");
    background-repeat: none;
    background-position: 0 0.5em;
}
```



----------
<br><br>

# CSS Width and Height
### Increase Decrease width to Specific Limit
In below CSS width will increase and decrease according to parent width **below 800px.** Above parent width 800 element will stick to 800px;
```css
.imgC{
  display:block; margin:0 auto; height:auto;
  width:800px; max-width:100%;
}
```

In below CSS width will increase and decrease according to parent width **above 800px**. Above parent width 800 element will stick to 800px;
```css
.imgC{
  display:block; margin:0 auto; height:auto;
  width:800px; min-width:100%;
}
```
<br><br>

### 100% Height
When you specify an element to have a height of 100%, the 100% refers to the parent element’s height. The parent element would then need to be 100% the height of its parent element and so on. The trick is to set the height of the outermost elements to be 100%
```css
html, body {
  height: 100%
}
```
We need to add one more thing. If your content exceeds 100% height then it will overflow its container. To correct this we’d need to set min-height on the content’s container
```css
#content {
  min-height: 100%
}
```
You can use one of the methods above for serving min-height to IE.

----------
<br><br>

# CSS Viewport
### Viewport Meta Tag
```html
<meta name="viewport"
    content="width=device-width, height=device-height, maximum-scale=1.0, minimum-scale=1.0, initial-scale=1.0, user-scalable=no" />
```
----------
<br><br>

# CSS Floats
### Clearing and Containing Floats
There are two basic methods to clearing CSS floats. The first is to use the clear property
```html
<div id="wrapper">
  <div id="header"></div>
  <div id="content"></div>
  <div id="sidebar"></div>
  <div id="footer"></div>
</div>
```
Say in the above html you have your content and sidebar div floated to the left and you want to ensure the footer div sits below both. You would use the clear property
```css
#content {float: left}
#sidebar {float: left}
#footer {clear: both}
```

You could also use clear: left or clear: right depending on which way the content and sidebar are floated.

If on the other hand your html is:
```html
<div id="header">
	<img id="logo" src="" alt="">
	<p id="tagline"></p>
</div>
```
and both the logo and tagline are floated, your header div will collapse and show as having 0 height. You can either add an empty div 
```html
<div class="clear"></div>
```
 and then clear the empty div as above 
 
 or 
 
 you can use the overflow property on the header div to contain the floated elements
```css
div#header {overflow: hidden}
```
The above will keep the header div from collapsing even if everything inside has been floated.

----------
<br><br>


### Mouse click (or touch) events on canvas causes selection drag
```css
#canvas {
	-webkit-tap-highlight-color: transparent;
}
```
<br><br>

### Avoid Ghost Image Selection
```css
.noselect {
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	 -ms-user-select: none; 
	-o-user-select: none; 
	user-select: none;
	outline: none; 
	text-decoration:none; 
	outline:none; 
	outline-color:none;
}
```
<br><br>



### Using a CSS Reset for Cross-Browser Compatibility
One of the issues in cross-browser web development is that different browsers use different default values for various CSS properties. By explicitly setting a property like margin to be 0 for certain html elements we can assure that the margin will be 0 on that element in all browsers. 
Using a CSS reset ensure that all browsers are on the same page so to speak.
```css
*{
	margin:0; padding:0;
}
```
**//---- or ---------**
```css
*{ -webkit-box-sizing: border-box;   -moz-box-sizing: border-box;  box-sizing: border-box;}
h1, h2, h3, h4, h5, h6, p, div, ul { margin:0; padding:0; font-weight:normal; line-height:100%;}
a{ text-decoration:none; outline:none; }
*:focus{outline:none;}
ul{list-style:none;}
img { border:0; vertical-align:middle;}
body { margin:0; padding:0; font-family:'FuturaLtBTLight', Arial, Helvetica, sans-serif; color:#ffffff; width:100%;  }
input[type="button"]{cursor:pointer;}
.clear { clear:both; margin:0; padding:0; }
.clearfix:after {content: " "; /* Older browser do not support empty content */ visibility: hidden; display: block; height: 0; clear: both;}

.overFlow{ overflow-x:hidden;}
svg, canvas{ pointer-events: none;}
p{ font-size:14px; line-height:27px; color:#393939;}
.f-left{float:left;}
.f-right{float:right;}
.Text-align-left{ text-align:left;}
.Text-align-right{ text-align:right;}

```
----------
<br><br>
# JAVASCRIPT

### Mobile Detection Code
Object Version
```javascript
this.isMobile = {};
this.isMobile.Android = function() {return navigator.userAgent.match(/Android/i);};
this.isMobile.BlackBerry = function() {return navigator.userAgent.match(/BlackBerry/i);};
this.isMobile.iOS = function() {return (navigator.userAgent.match(/iPhone|iPad|iPod/i) ||
  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));};
this.isMobile.iPad = function() {return (navigator.userAgent.match(/iPad/i) ||
  ((navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) && window.screen.width==768));};
this.isMobile.Opera = function() {return navigator.userAgent.match(/Opera Mini/i);};
this.isMobile.Windows = function() {return navigator.userAgent.match(/IEMobile/i);};
this.isMobile.Firefox = function() {return navigator.userAgent.match(/Firefox/gi);};
this.isMobile.InternetExplorer = function() {return navigator.userAgent.match(/MSIE/gi);};
this.isMobile.Opera = function() {return navigator.userAgent.match(/Opera/gi);};
this.isMobile.Safari = function() {return navigator.userAgent.match(/Safari/gi);};
this.isMobile.any = function() {return (This.isMobile.Android() || This.isMobile.BlackBerry() || This.isMobile.iOS() || This.isMobile.Opera() || This.isMobile.Windows());};
```
Normal Version
```javascript
var isMobile = {};
isMobile.Android = function() { return navigator.userAgent.match(/Android/i);};
isMobile.BlackBerry = function() { return navigator.userAgent.match(/BlackBerry/i);};
isMobile.iOS = function() { return (navigator.userAgent.match(/iPhone|iPad|iPod/i) ||
  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1))};
isMobile.iPad = function() { return (navigator.userAgent.match(/iPad/i) ||
  ((navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) && window.screen.width==768))};
isMobile.Opera = function() { return navigator.userAgent.match(/Opera Mini/i);};
isMobile.Windows = function() {return navigator.userAgent.match(/IEMobile/i);};
isMobile.Firefox = function() {return navigator.userAgent.match(/Firefox/gi);};
isMobile.InternetExplorer = function() {return navigator.userAgent.match(/MSIE/gi);};
isMobile.Opera = function() {return navigator.userAgent.match(/Opera/gi);};
isMobile.Safari = function() {return navigator.userAgent.match(/Safari/gi);};
isMobile.any = function() {
  return ( isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
};
```
<br><br>

### Shuffle Array, Set a random order
```javascript
function shuffleToArray(OldArray) {
    var i = 0;
    var TempArray = [];
    while (i < OldArray.length) {
        var ran = Math.floor(Math.random() * OldArray.length);
        TempArray.push(OldArray[ran]);
        OldArray.splice(ran, 1);
    }
    return TempArray;
};
var array = ["apple", "mango", "orange", "coconut"];
array = shuffleToArray(array);
```
<br>
----------
<br><br>

# Location, Query, 

### Get Query String Parameters
```javascript
// Assume "?post=1234&action=edit"

var urlParams = new URLSearchParams(window.location.search);

console.log(urlParams.has('post')); // true
console.log(urlParams.get('action')); // "edit"
console.log(urlParams.getAll('action')); // ["edit"]
console.log(urlParams.toString()); // "?post=1234&action=edit"
console.log(urlParams.append('active', '1')); // "?post=1234&action=edit&active=1"
```
URLSearchParams also provides methods like keys(), values(), and entries():

```javascript
var keys = urlParams.keys();
for(key of keys) { 
  console.log(key); 
}
// post
// action

var entries = urlParams.entries();
for(pair of entries) { 
  console.log(pair[0], pair[1]); 
}
```
JavaScript Fallback of **URLSearchParams**
```javascript
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};
```
With the function above, you can get individual parameter values:

```javascript
getUrlParameter('post'); // "1234"
getUrlParameter('action'); // "edit"
```


----------
<br><br>

# Youtube

### Live chat
Youtube live chat iframe embed code
```html
<iframe src="https://www.youtube.com/live_chat?v=EEIk7gwjgIM&embed_domain=www.example.com" width="700" height="600" style="position:absolute; top:0; left:0; z-index:99;"></iframe>
```
<br><br>


# Google Analytic
### Send Section View using #!section_id to googletagmanager 

```javascript
var lastHasTag = "";          
var sectionArrayNew = [];
sectionArrayNew.push({id:"home"});
sectionArrayNew.push({id:"quick_dissolve"});
sectionArrayNew.push({id:"why_choose_madhur"});
sectionArrayNew.push({id:"gaurantee_5s"});
sectionArrayNew.push({id:"pristine_sweetness"});
sectionArrayNew.push({id:"untouched_by_hand"});
for (var k = 0; k < sectionArrayNew.length; k++) {
    var obj = sectionArrayNew[k];
    var id = obj.id;
    var hash = "#"+id;
    var hashForGATag = "#!"+id;
    var targetSection = $(hash);
    obj.anchor = targetSection;
    obj.hash = hash;
    obj.targetSection = targetSection;
    obj.hashForGATag = hashForGATag;
}
function redrawDotNav(){  
    var wTop = $(window).scrollTop()+$(window).height()/2;
    var curSectObj = null;
    for (var i = 0; i < sectionArrayNew.length; i++) {
        var secObj = sectionArrayNew[i];
        var targetSection = secObj.targetSection;                    
        var top = targetSection.offset().top;
        var height = targetSection.height();  
        if(wTop>=top && wTop<=(top+height)){
            curSectObj = secObj;
        } 
    } 
    if(curSectObj)  {      
        if(lastHasTag!=curSectObj.hashForGATag){
            lastHasTag = curSectObj.hashForGATag;
            clearTimeout(window.intervalIdForHas)
            window.intervalIdForHas = setTimeout(function(){
                gtag('config', 'UA-xxxxxxxxx-1', { 'page_path': location.pathname +curSectObj.hashForGATag });
            }, 1500)
        }
    }
} 
redrawDotNav(); 
$(window).bind("scroll", redrawDotNav);

```