'use babel';

import LinkDemoSlotOlympusGacorView from './link-demo-slot-olympus-gacor-view';
import { CompositeDisposable } from 'atom';

export default {

  linkDemoSlotOlympusGacorView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.linkDemoSlotOlympusGacorView = new LinkDemoSlotOlympusGacorView(state.linkDemoSlotOlympusGacorViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.linkDemoSlotOlympusGacorView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'link-demo-slot-olympus-gacor:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.linkDemoSlotOlympusGacorView.destroy();
  },

  serialize() {
    return {
      linkDemoSlotOlympusGacorViewState: this.linkDemoSlotOlympusGacorView.serialize()
    };
  },

  toggle() {
    console.log('LinkDemoSlotOlympusGacor was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
