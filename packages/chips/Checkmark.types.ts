import type Component from './Checkmark.svelte';

export declare class CheckmarkComponentDev extends Component {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLSpanElement>>,
    keyof Component['$$prop_def']
  > &
    Component['$$prop_def'];
}