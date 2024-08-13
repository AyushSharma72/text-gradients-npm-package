# text-gradient

It is a react package to apply gradients and images inside text without writing any css. It offers a range of beautiful gradients and easy insertion and manipulation of image inside text.






## Demo

visit the page to see how it works

[Demo Page](https://text-gradients-demo.vercel.app/)


## Installation

Install my-project with npm and yarn

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
darkblue, cyan, lightbluegreen, ocean, dimyellow, bluepink, dashingblue see here:[Demo Page](https://text-gradients-demo.vercel.app/)



**2) to apply images in text easily**

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

 **pos** prop to adjust the placement of the image in the text it accepts value in percentages.

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

 **cover** prop that completely covers the element's content box
it accepts either true or false.

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

- [@AyushSharma72](https://github.com/AyushSharma72)


## Keywords

***text-gradients , gradients , text , react , reactjs , textimages , images***
