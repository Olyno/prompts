'use strict';
import * as autocomplete from './autocomplete';
import * as autocompleteMultiselect from './autocompleteMultiselect';
import * as confirm from './confirm';
import * as date from './date';
import * as multiselect from './multiselect';
import * as number from './number';
import * as select from './select';
import * as text from './text';
import * as toggle from './toggle';

export default {
  TextPrompt: text,
  SelectPrompt: select,
  TogglePrompt: toggle,
  DatePrompt: date,
  NumberPrompt: number,
  MultiselectPrompt: multiselect,
  AutocompletePrompt: autocomplete,
  AutocompleteMultiselectPrompt: autocompleteMultiselect,
  ConfirmPrompt: confirm
};
