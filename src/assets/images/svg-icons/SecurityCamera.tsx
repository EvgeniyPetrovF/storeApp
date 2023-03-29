import * as React from 'react';
import {SvgProps, SvgXml} from 'react-native-svg';

const xml = `
<svg fill="#000000" width="50px" height="50px" viewBox="0 -8 72 72" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><title>security-camera</title><polygon points="12.28 29.8 22.23 35.37 25.58 34.29 11.11 26.18 12.28 29.8"/><path d="M58.7,37.23v1.91h-8l-9.82-9.82L60.12,23.1a1.77,1.77,0,0,0,1.14-2.24L57.51,9.26a1.79,1.79,0,0,0-2.25-1.15L11.7,22.22a1.78,1.78,0,0,0-1.18,1.25l17.74,10,8.17-2.65L49,43.35H58.7v1.31A3.38,3.38,0,0,0,61.48,48V33.91A3.37,3.37,0,0,0,58.7,37.23ZM40.36,16.55c-.18-.55,0-1.09.31-1.2L53.3,11.27c.35-.11.77.24,1,.78s0,1.09-.31,1.2L41.31,17.33C41,17.45,40.54,17.09,40.36,16.55Z"/></svg>
`;

export default (props: SvgProps) => <SvgXml xml={xml} {...props} />;
