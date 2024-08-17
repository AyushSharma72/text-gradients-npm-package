
# text-gradient

It is a react package to apply gradients and images inside text without writing any css. It offers a range of beautiful gradients.
you can customize the direction of the gradient and also mainpulate the placement of the image inside text.






## Demo

visit the page to see how it works

[Demo Page](https://text-gradients-demo.vercel.app/)


## Installation

Install **"text-gradients"** with npm and yarn

with npm 
```bash
npm install text-gradients
```
with yarn
```
yarn add text-gradients
```
    ## Usage/Examples

you can use the package for two things 

**1) To apply gradients inside text**
```javascript
import { GradientText } from "text-gradients";

const TextGradients = () => {
  return (
    <GradientText color="purple">
      Text Gradients (purple)
    </GradientText>
  );
};
export default TextGradients;
}
```
**color prop variations:**

purple, deepblue,  lightgreen, peach, yellow, black, lightpink, gray,magenta, slate, darkgreen, bluered, lightpurple, brightorange, red,
darkblue, cyan, lightbluegreen, ocean, dimyellow, bluepink, dashingblue 


**direction prop:**

the diection prop can be used to chnage the direction of the gradient the default value of this prop is **"right"**

example:

```javascript
import { GradientText } from "text-gradients";

const TextGradients = () => {
  return (
    <GradientText color="purple" direction="top">
      Text Gradients (purple)
      
    </GradientText>
  );
};
export default TextGradients;
}
```

**direction prop variations:**

 **"top"** (from bottom to top)  
 **"bottom"** (from top to bottom)  
 **"right"** (form left to right)  
 **"left"** (from left to right)  
 **"top right"** (towards top right)  
 **"top left"** (towards top left)  
 **"bottom right"** (towards bottom right)  
 **"bottom left"** (towards bottom left)


see here : [Demo Page](https://text-gradients-demo.vercel.app/)



**2) to apply images in text**

give the image path in imageUrl
```javascript
import { TextImage } from "text-gradients";
import lightning from "../assets/light.jpeg"; // image

const ImageInText = () => {
  return (
    <TextImage
      imageUrl={lightning}
    >
      TEXT IMAGES
    </TextImage>
  );
};

export default ImageInText;

```

**pos prop:**
 
Adjusts the placement of the image in the text. Accepts a value in percentages:

example:

```javascript
import { TextImage } from "text-gradients";
import lightning from "../assets/light.jpeg"; // image

const ImageInText = () => {
  return (
    <TextImage
      imageUrl={lightning}
      pos={50%}
    >
      TEXT IMAGES
    </TextImage>
  );
};

export default ImageInText;

```

**cover prop:**
 
 Determines whether the image covers the entire content box. Accepts true or false:

example:

```javascript
import { TextImage } from "text-gradients";
import lightning from "../assets/light.jpeg"; // image

const ImageInText = () => {
  return (
    <TextImage
      imageUrl={lightning}
      pos={50%}
      cover={true}
    >
      TEXT IMAGES
    </TextImage>
  );
};

export default ImageInText;

```
## Authors

- [Ayush Sharma](https://github.com/AyushSharma72)

