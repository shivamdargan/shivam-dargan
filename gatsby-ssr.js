// Import React so that you can use JSX in HeadComponents
const React = require("react")
const PostBodyComponents = [
    <script key="Jquery" src="/jquery-3.2.1.min.js"/>,
    <script key="my-plugin" src="/plugins.js" />,
    <script key="my-main" src="/main.js" />
]

exports.onRenderBody = ({
    setPostBodyComponents
}, pluginOptions) => {
    setPostBodyComponents(PostBodyComponents);
}