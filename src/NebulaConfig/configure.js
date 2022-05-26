import { embed } from '@nebula.js/stardust';

import barchart from '@nebula.js/sn-bar-chart';
import piechart from '@nebula.js/sn-pie-chart';
import linechart from '@nebula.js/sn-line-chart';

const n = embed.createConfiguration({
  context: {
    theme: 'light',
    language: 'en-US',
  },
  types: [
    {
      name: 'barchart',
      load: () => Promise.resolve(barchart),
    },
    {
      name: 'piechart',
      load: () => Promise.resolve(piechart)
    },
    {
      name: 'linechart',
      load: () => Promise.resolve(linechart)
    }
  ],
});

export default n;
