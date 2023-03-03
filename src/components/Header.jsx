// when you actually use the component is when the capitalization matters. So, if you're using the component in a JSX file, then you need to use the capitalization. If you're using the component in a JavaScript file, then you don't need to use the capitalization. So, if you're using the component in a JSX file, then you need to use the capitalization. If you're using the component in a JavaScript file, then you don't need to use the capitalization.
export default function Header({ text }) {
  // Props are passed as an objet. we can destructure it to get the text prop.
  return <h1 className="text-3xl font-bold underline">{text}</h1>;
}
