import App from './short.svelte';
import '../../App.scss';

window.app = new App({
  target: document.getElementsByTagName('app')[0]
});