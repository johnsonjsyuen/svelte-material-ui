import type Component from './Nav.svelte';

export declare class NavComponentDev extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<Partial<svelte.JSX.HTMLAttributes<HTMLElement>>, 'use'> &
    Component['$$prop_def'];
}