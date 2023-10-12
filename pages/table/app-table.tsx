import { ChartConfig, GuiChart, GuiTable } from '@greycat/web';
import { hello } from '../../common/project';
import s from './app-table.module.css';

export class AppTable extends HTMLElement {
  private _table: GuiTable;
  private _chart: GuiChart;
  private _chartConfig: ChartConfig;

  constructor() {
    super();

    this._table = document.createElement('gui-table');

    this._chart = document.createElement('gui-chart');
    this._chartConfig = {
      table: { cols: [[], [], []] },
      xAxis: {},
      yAxes: {
        y: {},
      },
      series: [
        {
          title: 'My serie',
          type: 'line',
          yAxis: 'y',
          xCol: 0,
          yCol: 2,
        },
      ],
    };
  }

  async connectedCallback() {
    this.appendChild(
      <div className={s.container}>
        {this._table}
        {this._chart}
      </div>
    );

    this._chart.setConfig(this._chartConfig);

    try {
      const table = await hello.table_example('sample');
      this._table.table = table;
      this._chartConfig.table = table;
      this._chart.config = this._chartConfig;
    } catch (err) {
      // handle potential error properly
      console.error(err);
    }
  }

  disconnectedCallback() {
    this.replaceChildren();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-table': AppTable;
  }

  namespace JSX {
    interface IntrinsicElements {
      'app-table': GreyCat.Element<AppTable>;
    }
  }
}

if (!customElements.get('app-table')) {
  customElements.define('app-table', AppTable);
}
