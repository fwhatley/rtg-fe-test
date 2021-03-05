/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import './src/styles/global.css';

// redux setup: https://github.com/gatsbyjs/gatsby/blob/master/examples/using-redux/gatsby-browser.js
import wrapWithProvider from './wrap-with-provider';

export const wrapRootElement = wrapWithProvider;
