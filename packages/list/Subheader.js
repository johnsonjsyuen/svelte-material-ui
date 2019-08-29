import ClassAdder, {internals} from '@svelte-material-ui/common/ClassAdder.svelte';
import H3 from '@svelte-material-ui/common/H3.svelte';

function Subheader(...args) {
  internals.class = 'mdc-list-group__subheader';
  internals.component = H3;
  internals.contexts = {};
  return new ClassAdder(...args);
}

Subheader.prototype = ClassAdder;

export default Subheader;