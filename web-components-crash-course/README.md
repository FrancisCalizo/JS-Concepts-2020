https://www.youtube.com/watch?v=PCWaFLy3VUo

## "An ecapsulated, reusable Component" (Think React components)

Web Components are a set of platform API's that allow us to create custom, reusable, and encapsulated html tags to use in web pages and web apps.
Web Components do no require any special 3rd part libaries or frameworks but can be certainly used with them.

## Three Main Building Blocks when creating Web Components:

1. Custom Elements
2. Shadow DOM
3. HTML Templates

## Custom Elements

- Create custom HTML Tags
- Create custom class
- Lifecycle methods available (constructor, connectedCallback, disconnectCallback, attributeChangedCallback)

## Shadow DOM

- Used for self-contained components
- Encapsulated styles and markup
- Create with elements.attachShadow({mode: open})
- Creates a "shadow-root" that we can reference and interact with
- "A DOM within the DOM"

## HTML Templates

- Define the encapsulated markup of our web components
- Template tag stores markup on page
- Include both HTML and CSS in templates
- Use slots to add custom text
