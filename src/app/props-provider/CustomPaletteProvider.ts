import {IPalette, IPaletteProvider} from "../bpmn-js/bpmn-js";

export class CustomPaletteProvider implements IPaletteProvider {


  constructor(private palette: IPalette, private originalPaletteProvider: IPaletteProvider) {
    // console.log(this.constructor.name, "constructing", palette, originalPaletteProvider);
    palette.registerProvider(this);
  }

  getPaletteEntries() {
    // console.log(this.constructor.name, "getPaletteEntries", this.palette, this.originalPaletteProvider);
    return {
      save: {
        group: 'tools',
        className: ['fa-save', 'fa'],
        title: 'TEST',
        action: {
          click: () => console.log( 'TEST Action clicked!')
        }
      },
    };
  }
}
